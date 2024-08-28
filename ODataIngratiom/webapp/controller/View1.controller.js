
sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("college.controller.View1", {
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

             var oModel=new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZBB_COLLEGE_SRV/");
             oModel.create("/STUDENTSSet",obj,{
                success:function(event){
                    sap.m.MessageToast.show("Created Succesfully");
                },
                error:function(err){
                    console.log(err);
                }
             })
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
        }
    });
});
