sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/export/Spreadsheet",
    "project6/util/dateFormat",
    "project6/controller/pdf"
],
function (Controller, Spreadsheet, dateFormat) {
    "use strict";

    return Controller.extend("project6.controller.View1", {
        // formatter: dateFormat,

        // onBeforeRendering: function () {
        //     var dData = [
        //         { "state": "Andhra Pradesh", "city": "Vizag" },
        //         { "state": "Telangana", "city": "Hyderabad" },
        //         { "state": "Tamil Nadu", "city": "Chennai" },
        //         { "state": "Karnataka", "city": "Banglore" },
        //         { "state": "Kerela", "city": "Tiruvunanthapuram" }
        //     ];
        //     this.getView().setModel(new sap.ui.model.json.JSONModel(dData), "testData");
        // },

        onInit: function () {
            this.TabData = new sap.ui.model.json.JSONModel([]);
            this.getView().setModel(this.TabData, 'TabData');
console.log("hlkj");

            // this.cols = [
            //     { property: "EmpId" },
            //     { property: "Name" },
            //     { property: "Joining Date" },
            //     { property: "Email" },
            //     { property: "Department" },
            //     { property: "Monthly Salary" },
            //     { property: "Job Status" },
            //     { property: "Location" },
            //     { property: "date", type: "Date", format: "DD-MM-YYYY" }
            // ];

            // this.getView().setModel(new sap.ui.model.json.JSONModel({ date: new Date() }), "dd");
        },

        onUpload: function (e) {
          console.log("ee==>",e);
          
            this._import(e.getParameter("files") && e.getParameter("files")[0]);
        },

        _import: function (file) {
            console.log("ee==>",file);
            debugger;
            var that = this;
            if (file && window.FileReader) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    var workbook = XLSX.read(e.target.result, { type: 'binary' });
                    var data = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[workbook.SheetNames[0]]);
                    that.TabData.setData(data);
                };
                reader.onerror = function (ex) {
                    console.log(ex);
                };
                reader.readAsBinaryString(file);
            }
        },

        callChange: function (oe) {
            this.getView().getModel("dd").setProperty("/date", oe.getParameter("value"));
        },

        addCurrency: function (value) {
            if (value < 1000) value *= 10;
            return "₹" + value;
        },

        downloadData: function () {
            var data = this.TabData.getData();
            var oSpreadsheet = new Spreadsheet({
                workbook: { columns: this.cols },
                worksheetName: "cbt",
                dataSource: data,
                fileName: 'CBT Task Data',
                exportSettings: { dateFormat: { pattern: "d-mmm-yy" } }
            });
            oSpreadsheet.build().finally(() => oSpreadsheet.destroy());
        },

        addNew: function () {
            if (!this.ooDialog) {
                this.ooDialog = sap.ui.xmlfragment("project6.view.AddNew", this);
                this.getView().addDependent(this.ooDialog);
            }
            this.ooDialog.open();
        },

        closeDialog: function () {
            if (this.ooDialog) this.ooDialog.close();
            if (this.oDialog) this.oDialog.close();
        },

        saveNew: function () {
            var newElement = {
                "EmpId": sap.ui.getCore().byId("idInputEmpid").getValue(),
                "Name": sap.ui.getCore().byId("idInputEmpName").getValue(),
                "Joining Date": sap.ui.getCore().byId("datePicker").getValue(),
                "Email": sap.ui.getCore().byId("idInputEmpEmail").getValue(),
                "Department": sap.ui.getCore().byId("idInputEmpDept").getValue(),
                "Monthly Salary": sap.ui.getCore().byId("idInputEmpsal").getValue(),
                "Job Status": sap.ui.getCore().byId("idInputEmpStatus").getValue(),
                "Location": sap.ui.getCore().byId("idInputEmpLoc").getValue()
            };

            var data = this.TabData.getData();
            data.push(newElement);
            this.TabData.setData(data);
            this.closeDialog();
        },

        editpopout: function (oEvent) {
            var path = oEvent.getSource().getBindingContext("TabData").getPath();
            var index = parseInt(path.split("/")[1]);
            var item = this.TabData.getData()[index];
            this.getView().setModel(new sap.ui.model.json.JSONModel(item), "New");

            if (!this.oDialog) {
                this.oDialog = sap.ui.xmlfragment("project6.view.edit", this);
                this.getView().addDependent(this.oDialog);
            }
            this.oDialog.open();
        },

        n: 1,
        onSwitchChange: function () {
          console.log("j;lkm");
          
            var text = this.n % 2 === 0 ? "English" : "Telugu";
            var model = this.getView().getModel(this.n % 2 === 0 ? "engData" : "TeluguData");
            this.getView().setModel(model, "TabData");
            this.getView().byId("idText").setText(text);
            this.n++;
        },

        downloadPDFData: function () {
            var data = this.TabData.getData();
            var docDefinition = {
                content: [
                    {
                        table: {
                            body: [
                                ['EmpId', 'Name', 'Department', 'Location', 'Joining Date', 'Email', 'Monthly Salary', 'Job Status'],
                                ...data.map(item => [
                                    item.EmpId, item.Name, item.Department, item.Location,
                                    item["Joining Date"], item.Email, item["Monthly Salary"], item["Job Status"]
                                ])
                            ]
                        }
                    }
                ]
            };
            pdfMake.createPdf(docDefinition).download('table.pdf');
        },

        downloadImageData: function () {
            var tableElement = this.getView().byId("idTable").getDomRef();
            html2canvas(tableElement).then(function (canvas) {
                var link = document.createElement("a");
                link.href = canvas.toDataURL("image/png");
                link.download = "Exported_Table.jpeg";
                link.click();
            });
        },

        exportData: function () {
            this.getView().byId("idExportConfirm").open();
        },

        validateExport: function () {
            var selectedText = this.getView().byId("idRadioGroup").getSelectedButton().getText();
            if (selectedText === 'Excel(XLSX)') this.downloadData();
            else if (selectedText === 'Pdf') this.downloadPDFData();
            else if (selectedText === 'Image') this.downloadImageData();
            else sap.m.MessageBox.warning("Sorry.....The Extension you requested is under development...");
            this.cancelExport();
        },

        cancelExport: function () {
            this.getView().byId("idRadioGroup").setSelectedIndex(0);
            this.getView().byId("idExportConfirm").close();
        },

        checkCondition: function () {
            var aItems = this.getView().byId("idStateTable").getItems();
            var aDataArray = aItems.map(oItem => {
                return {
                    state: oItem.getCells()[0].getSelectedItem().getText(),
                    city: oItem.getCells()[1].getSelectedItem().getText()
                };
            });

            let duplicate = false, sDuplicate = false;

            aDataArray.forEach(function (elem, i, arr) {
                let stateCount = arr.filter(e => e.state === elem.state).length;
                let cityCount = arr.filter(e => e.city === elem.city).length;
                if (stateCount > 1) sDuplicate = true;
                if (stateCount > 1 && cityCount > 1) duplicate = true;
            });

            if (sDuplicate) sap.m.MessageBox.alert("State should not be same");
            else if (duplicate) sap.m.MessageBox.alert("Repeated");
            else sap.m.MessageBox.success("Congrats!! You have No Repeated Selections");
        }
    });
});
