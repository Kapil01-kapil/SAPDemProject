sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("project3.controller.View1", {
            onInit: function () {
                var model=new sap.ui.model.json.JSONModel();
                var oModel=new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZBB_COLLEGE_SRV/");
                var that=this;
                oModel.read("/STUDENTSSet",{
                    success:function(data){
                        model.setData(data.results);
                        console.log(data.results)
                        that.getView().setModel(model,"stuModel");
                    },error:function(err){
                       console.log(err);
                    }
                })
            },
            onClickCreate:function(){
                this.getOwnerComponent().getRouter().navTo("createStudent");
            },
            onClickSaveCreate:function(){
               let data = this.getView().byId("idSimpleForm").getContent();
               var valueArr=[];
                for(let i=1;i<data.length;i+=2){
                    valueArr.push(data[i].getValue());
                }
                
                let obj= {
                        "StuId": valueArr[0],
                        "StuName": valueArr[1],
                        "StuDob": new Date(valueArr[2]),
                        "StuDept": valueArr[3],
                        "StuPh": valueArr[4]
                    };
                var that=this;
                 var oModel=new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZBB_COLLEGE_SRV/");
                 oModel.create("/STUDENTSSet",obj,{
                    success:function(event){
                        that.clearInputValues();
                        that.getOwnerComponent().getRouter().back();
                        sap.m.MessageToast.show("Created Succesfully");
                    },
                    error:function(err){
                        console.log(err);
                    }
                 });
            },
            onClickDelete:function(){
                let id=this.getView().byId("idTableSTU").getRows()[this.getView().byId("idTableSTU").getSelectedIndex()].getCells()[0].getText();
                var oModel=new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZBB_COLLEGE_SRV/");
                oModel.remove("/STUDENTSSet('"+id+"')",{
                   success:function(event){
                       sap.m.MessageToast.show("Deleted Succesfully");
                   },
                   error:function(err){
                       console.log(err);
                   }
                })
            },
            onClickValueHelp:function(){
                this.getView().byId("idValueHelp").open();
            },
            onClickItem:function(oEvent){
                let sName=oEvent.getParameters().listItem.getCells()[0].getText();
                this.getView().byId("idNameStu").setValue(sName);
                this.getView().byId("idValueHelp").close();
            },
            clearInputValues:function(){
                let data = this.getView().byId("idSimpleForm").getContent();
                 for(let i=1;i<data.length;i+=2){
                    data[i].setValue();
                 }
            },
            onClickCell:function(oEvent){
                oEvent.getSource().getRows()[oEvent.getParameters().rowIndex].getCells()[oEvent.getParameters().columnIndex].setEditable(true);
    
            },
            onSubmitEdits:function(oEvent){
               let newPh= oEvent.getSource().getValue();
               let sPath = oEvent.getSource().getBindingPath("value");
          
            //    console.log("sPath=>",sPath);
            //    'StuPh'
               let obj={
                [sPath]:newPh
               }
               let id=oEvent.getSource().getParent().getCells()[0].getText();
               var oModel=new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZBB_COLLEGE_SRV/");
                oModel.update("/STUDENTSSet('"+id+"')",obj,{
                   success:function(event){
                      oEvent.getSource().setEditable(false);
                       sap.m.MessageToast.show("Updated Succesfully");
                   },
                   error:function(err){
                       console.log(err);
                   }
                })
            },
            onDateChange: function (oEvent) {
                // Get the selected date from the DatePicker
                let sNewDate = oEvent.getSource().getDateValue();
    
                // Format the date to match the model's format
                let oDateFormat = sap.ui.core.format.DateFormat.getDateInstance({
                    pattern: "yyyy-MM-dd"
                });
                let sFormattedDate = oDateFormat.format(sNewDate);
    
                // Get the binding path of the DatePicker value
                let sPath = oEvent.getSource().getBindingPath("value");
    

                let obj={
                    [sPath]: new Date(sFormattedDate)
                   }
                   let id=oEvent.getSource().getParent().getCells()[0].getText();
                   var oModel=new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZBB_COLLEGE_SRV/");
                    oModel.update("/STUDENTSSet('"+id+"')",obj,{
                       success:function(event){
                          oEvent.getSource().setEditable(false);
                           sap.m.MessageToast.show("Updated Succesfully");
                       },
                       error:function(err){
                           console.log(err);
                       }
                    })
               
            },
            onSelectLanguage:function(oEvent){
                let selectedLangu = oEvent.getParameters().selectedItem.getText();
                if(selectedLangu == 'हिंदी'){
                    sap.ui.getCore().getConfiguration().setLanguage("Hi");
                } else if(selectedLangu == 'తెలుగు'){
                    sap.ui.getCore().getConfiguration().setLanguage("Te");
                }
                else{
                    sap.ui.getCore().getConfiguration().setLanguage("En");
                }
            }
        });
    });
