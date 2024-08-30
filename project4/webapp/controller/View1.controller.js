sap.ui.define([
    "sap/ui/core/mvc/Controller",
       "sap/m/MessageToast",
       "sap/ui/model/json/JSONModel",
     "sap/ui/export/Spreadsheet",
     
      
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageToast,JSONModel, Spreadsheet) {
        "use strict";
        console.log('Spreadsheet:', Spreadsheet); // Check if Spreadsheet is defined
        return Controller.extend("project4.controller.View1", {
            onInit: function () {
                var oData = {
                    data: [
                       
                    ]
                };
                var oModel = new JSONModel(oData);
                this.getView().setModel(oModel);
            },
            uploadButtonPress: function(oEvent) {
           
                // Get the data from the event
                
              var data = []
                var oSpreadsheetData = oEvent.getParameter("parsedData");
             var datas =  this.getView().getModel();
                console.log("oSpreadsheetData",datas);
    
                // Process the uploaded data
                if (oSpreadsheetData && oSpreadsheetData.length > 0) {
                    // Example: Iterate over the data and log it
                    oSpreadsheetData.forEach(function(row) {
                        console.log("Customer: " + row.Customer);
                        console.log("Product ID: " + row['Product ID']);
                        console.log("Quantity: " + row.Quantity);
                        data.push(row)
                    });
                    var oData ={
                        data:data
                    } 
                    var oModel = new JSONModel(oData);
                    this.getView().setModel(oModel);
                   
   
    
                    // Show a success message
                    MessageToast.show("Excel file uploaded and data processed successfully.");
                } else {
                    MessageToast.show("No data found in the Excel file.");
                }
            },
            createColumnConfig: function () {
                return [
                    {
                        label: 'Customer',
                        property: 'customer',
                        type: 'String' // Ensure EdmType is properly used
                    },
                    {
                        label: 'Product ID',
                        property: 'product_ID',
                        type: 'String'
                    },
                    {
                        label: 'Quantity',
                        property: 'quantity',
                        type: 'Number',
                        scale: 2,
                        delimiter: true
                    }
                ];
            },
            onExportPress: function () {
                var oTable = this.byId('exportTable');
                if (!oTable) {
                    console.error("Table control is not available");
                    return;
                }
                
                var oRowBinding = oTable.getBinding('items');
                if (!oRowBinding) {
                    console.error("Binding is not available on the table");
                    return;
                }
                
                var aCols = this.createColumnConfig();
                
                var oModel = this.getView().getModel();
                var aData = oModel.getProperty("/data");
                
                if (!aData) {
                    console.error("Data is not available in the model");
                    return;
                }
                
                var oSettings = {
                    workbook: {
                        columns: aCols
                    },
                    dataSource: aData,
                    fileName: 'Table_export_sample.pdf'
                  
                };
                
                console.log("oSettings",oSettings);
                
               // Verify that Spreadsheet is a function (constructor)
                if (typeof Spreadsheet !== 'function') {
                    console.error("Spreadsheet is not a constructor");
                    return;
                }
    
                var oSheet = new Spreadsheet(oSettings);
                oSheet.build().finally(function () {
                    oSheet.destroy();
                });
                var  oSheet = new Spreadsheet(oSettings);
                oSheet.build().finally(function() {
                    oSheet.destroy();
                });

                // var oSheet = new Spreadsheet({
                //     dataSource: [
                //         { Name: "John Doe", Age: 30, Occupation: "Engineer" },
                //         { Name: "Jane Smith", Age: 25, Occupation: "Designer" }
                //     ],
                //     worksheets: [
                //         {
                //             name: "Sheet1",
                //             columns: [
                //                 { label: "Name", property: "Name" },
                //                 { label: "Age", property: "Age" },
                //                 { label: "Occupation", property: "Occupation" }
                //             ]
                //         }
                //     ]
                // });
    
                // oSheet.build().then(function () {
                //     oSheet.download();
                // });
            },
            handlePdf : function(){
                var tabledata =this.getView().getModel().getData();
                this.JSONToPDFConvertor(tabledata);     
            },
            
            JSONToPDFConvertor: function(JSONData){
            
                var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
                var columns = new Array;
                for (var index in arrData[0]) {
                    //Now convert each value to string and comma-seprated
                    columns.push(index);
                }
                var rows = new Array;
                console.log(arrData);
                for(var i=0;i<arrData.length;i++){
                    rows[i]=new Array;
            
                    for(var j=0;j<arrData.length;){
            
                        for (var index in arrData[0]){
            
                            rows[i][j]=arrData[i][index];
                            j++;
                        }
                    }
                }
                if(columns.length<4){
                    var doc = new jsPDF('p', 'pt');
                }else{
                    var doc = new jsPDF('l','pt');
                }
                doc.autoTable(columns, rows);
            
                doc.save('table.pdf');
            
            },
            
           
        });
    });
