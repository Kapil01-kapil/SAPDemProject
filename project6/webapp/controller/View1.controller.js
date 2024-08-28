sap.ui.define([
    "sap/ui/core/mvc/Controller",
      "sap/ui/export/Spreadsheet",
    'project6/util/dateFormat',
    'project6/controller/pdf',
    // "project6/libs/pdfmake/pdfmake", // or the CDN path
    // "project6/libs/pdfmake/vfs_fonts" // or the CDN path
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Spreadsheet,dateFormat) {
        "use strict";

        return Controller.extend("project6.controller.View1", {
            formatter:dateFormat,
            onBeforeRendering:function()
            {
                var dData=[ { "state":"Andhra Pradesh",
                              "city":"Vizag"
                            },
                            { "state":"Telangana",
                              "city":"Hyderabad"
                            },
                            { "state":"Tamil Nadu",
                              "city":"Chennai"
                            },
                            { "state":"Karnataka",
                              "city":"Banglore"
                            },
                            { "state":"Kerela",
                              "city":"Tiruvunanthapuram"
                            }
                            ];
                            this.getView().setModel(new sap.ui.model.json.JSONModel(dData),"testData");
            },
            onInit: function () 
            {
                var oM=new sap.ui.model.json.JSONModel([{}]);
                this.getView().setModel(oM,'TabData');
                // console.log(new Date());
                this.cols = [];
                var labels=["EmpId","Name","Joining Date","Email","Department","Monthly Salary","Job Status","Location"];
                for (let i = 0; i < labels.length; i++) 
                {
                    this.cols.push({property:labels[i]}); 
                }
                this.cols.push(
                    {
                        property:"date",
                        type: "Date",
                        format: "DD-MM-YYYY"
                    }
                );
                var d=new Date();
                // console.log(typeof(d))
                var date=
                {
                    "date":new Date()
                    
                };
                this.getView().setModel(new sap.ui.model.json.JSONModel(date),"dd");


                // this.getView().setModel(new sap.ui.model.json.JSONModel(dat),"TabData");
                
                // this.cols.push(
                //     {
                //         property: 'EmpId'
                //     }
                // );
                // this.cols.push(
                //     {
                //         property: 'Name'
                //     }
                // );
                // this.cols.push(
                //     {
                //         property: 'Joining Date'
                //     }
                // );
                // this.cols.push(
                //     {
                //         property: 'Email'
                //     }
                // );
                // this.cols.push(
                //     {
                //         property: 'Department'
                //     }
                // );
                // this.cols.push(
                //     {
                //         property: 'Monthly Salary'
                //     }
                // );
                // this.cols.push(
                //     {
                //         property: 'Job Status'
                //     }
                // );

                // this.cols.push(
                //     {
                //         property: 'Location'
                //     }
                // );

                
            },
            callChange: function(oe)
            {
                console.log("Pavan : "+oe.getParameter("value"));
                var model = this.getView().getModel("dd");
                model.setProperty("date",oe.getParameter("value") );
            },
            addCurrency: function (oEvent) {
                if (oEvent < 1000) {
                    oEvent = oEvent * 10;
                }
                return "₹" + oEvent
            },
            downloadData: function () 
            {
                var dataLength=(this.getView().byId("idTable").getBinding("items").oModel.oData).length;
                if(dataLength!=0)
                {
                var oSpreadsheet = new Spreadsheet(
                    {
                    workbook: { columns: this.cols },
                    worksheetName:"cbt",
                    dataSource: this.getView().byId("idTable").getBinding("items"),
                    fileName:'CBT Task Data ',
                    exportSettings: { dateFormat: { pattern: "d-mmm-yy"  }},
                    // fileType: "csv" // Specify the output format as CSV
                    // formatter: new sap.ui.export.CSVFormatter()
                    });
                }
                else
                {
                    var oSpreadsheet = new Spreadsheet(
                        {
                        workbook: { columns: [{ property:''}] },
                        worksheetName:"cbt",
                        dataSource: this.getView().byId("idTable").getBinding("items"),
                        fileName:'CBT Task Data ',
                        exportSettings: { dateFormat: { pattern: "d-mmm-yy"  }},
                        // fileType: "csv" // Specify the output format as CSV
                        // formatter: new sap.ui.export.CSVFormatter()
                        });
                }

                // Generating the spreadsheet
                oSpreadsheet.build().finally()
                {
                    oSpreadsheet.destroy();
                };
            },

            addNew : function()
            {
                // alert("Entered")
                if(!this.ooDialog)
                {
                   this.ooDialog=sap.ui.xmlfragment("project6.view.AddNew", this);
                    this.getView().addDependent(this.oDialog);
                }
                this.ooDialog.open();
            },
            closeDialog:function()
            {
                this.oDialog.close();
                this.ooDialog.close();
            },
            saveNew:function()
            {
                var id=sap.ui.getCore().byId("idInputEmpid").getValue();
                var name=sap.ui.getCore().byId("idInputEmpName").getValue();
                var dia=sap.ui.getCore().byId("datePicker").getValue();
                var email=sap.ui.getCore().byId("idInputEmpEmail").getValue();
                var dept=sap.ui.getCore().byId("idInputEmpDept").getValue();
                var sal=sap.ui.getCore().byId("idInputEmpsal").getValue();
                var js=sap.ui.getCore().byId("idInputEmpStatus").getValue();
                var loc=sap.ui.getCore().byId("idInputEmpLoc").getValue();
                var newElement =  {
                        "EmpId": id,
                        "Name": name,
                        "Joining Date": dia,
                        "Email": email,
                        "Department": dept,
                        "Monthly Salary": sal,
                        "Job Status": js,
                        "Location":loc
                    };
          
                var oModel = this.getView().getModel("TabData").oData; // getting json array
                console.log(oModel.length)
                oModel.push(newElement); // adding new object to the json array
                var mdl=new sap.ui.model.json.JSONModel(oModel);
                this.getView().setModel(mdl,"TabData"); // Again setting the model
                console.log(oModel);
                this.ooDialog.close();   
            },
            editpopout:function(Obj)
            {
                var path=Obj.getSource().getBindingContext("TabData").getPath();
                if(path.length==2)
                {
                path=path[1]
                }
                else{
                    path=path[1]+path[2]
                }
                var src= this.getView().getModel("TabData").oData;
                console.log(src)
                this.getView().setModel(new sap.ui.model.json.JSONModel(src[path]),"New");
                // sap.ui.getCore().byId("idEditMail").setValue(555)
                if(!this.oDialog)
                {
                this.oDialog=sap.ui.xmlfragment("project6.view.edit",this);
                this.getView().addDependent(this.oDialog);
                }
                this.oDialog.open();
            },
            n:1,
            onSwitchChange:function()
            {
                console.log(this.n)
                if(this.n%2==0)
                {
                    console.log("Even")
                    var  data=this.getView().getModel("engData");
                    this.getView().setModel(data,"TabData");
                    // this.getView().setModel(new sap.ui.model.json.JSONModel({}),"TabData");
                    this.getView().byId("idText").setText("English");
                    
                    this.n++;
                }
                else{
                    console.log(this.tData)
                    var tData=this.getView().getModel("TeluguData");
                    this.getView().setModel(tData,"TabData");
                    this.getView().byId("idText").setText("Telugu");
                    
                    this.n++;

                }
            },
            downloadPDFData:function()
            {
                var oTable = this.getView().byId("idTable");
                var aData = oTable.getModel("TabData").getData();

                // Define the PDF document definition
                var docDefinition = {
                  content: [
                    {
                      table: {
                        body: [
                          // Header row
                          ['EmpId', 'Name','Department','Location',"Joining Date",'Email','Monthly Salary' ,'Job Status'],
                          // Data rows
                          ...aData.map(item => [item.EmpId, item.Name,item.Department, item.Location, item.JoiningDate, item.Email,item.MonthlySalary,item.JobStatus])
                        ]
                      }
                    }
                  ]
                };
              
                // Create the PDF
                pdfMake.createPdf(docDefinition).download('table.pdf');
             },
             downloadImageData:function()
             {
                var oTable = this.getView().byId("idTable");

                var tableElement = oTable.getDomRef();

                // Use HTML2Canvas to capture the table as an image
                html2canvas(tableElement).then(function(canvas) {
                    // Convert the canvas to a data URL
                    var imageData = canvas.toDataURL("image/png");
                    var link=document.createElement("a");
                    link.href=imageData;
                    link.download="Exported_Table.jpeg";
                    link.click();
                });
             },
             exportData:function()
             {
                this.getView().byId("idExportConfirm").setVisible(true).open();
             },
             validateExport:function()
             {
                var radiobtngrp=this.getView().byId("idRadioGroup");
                var s=radiobtngrp.getSelectedButton().getText();
                console.log(s)
                if(s==='Excel(XLSX)')
                {
                    this.downloadData();
                    this.cancelExport();
                    
                }
                else if(s==='Pdf')
                {
                    this.downloadPDFData();
                    // this.getView().byId("idExportConfirm").setVisible(true).close();
                    // radiobtngrp.setSelectedIndex(0);
                    this.cancelExport();
                }
                else if(s==='Image')
                {
                    this.downloadImageData();
                    // radiobtngrp.setSelectedIndex(0);
                    this.cancelExport();
                }
                else 
                {
                    new sap.m.MessageBox.warning("Sorry.....The Extension is you requesting is under development...😐😐");
                    // radiobtngrp.setSelectedIndex(0);
                    this.cancelExport();
                }
       

             },
             cancelExport:function()
             {
                this.getView().byId("idRadioGroup").setSelectedIndex(0);
                this.getView().byId("idExportConfirm").setVisible(true).close();

             },
             checkCondition:function()
             {
                var oTable = this.getView().byId("idStateTable");
                var aItems = oTable.getItems();
                var aDataArray = [];

                aItems.forEach(function(oItem) {
                    let st=oItem.getCells()[0].getSelectedItem().getText();
                    let cy=oItem.getCells()[1].getSelectedItem().getText();
                    aDataArray.push({"state":st,"city":cy})
                });
                console.log(aDataArray);
                var s=0,c=0;
                var duplicate=false;
                var sDuplicate=false;
                aDataArray.forEach(function(Element)
                {
                    s=0,c=0;
                    var dupArray=Element;
                    // console.log(dupArray);
                    aDataArray.forEach(function(e1){
                            if(Element.state==e1.state){
                                s++;
                            }
                            if(Element.city==e1.city){
                                c++;
                            }
                    });
                    if(s>1 && c>1)
                    {
                        duplicate=true;
                    }
                    if(s>1)
                    {
                        sDuplicate=true;
                    }
                    
                })
                if(sDuplicate)
                {
                    sap.m.MessageBox.alert("State should not be same");
                }
                   else if(duplicate)
                    {
                        sap.m.MessageBox.alert("Repeated");
                        
                    }
                    else{
                        sap.m.MessageBox.success("Congrats!! You have No Repeated Selections");
                    }
             }

     

        });
    });
