sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("projectapi.controller.View1", {
             onInit: function () {
            let dataModel=new sap.ui.model.json.JSONModel();
            var that=this;
            let url="https://cors-anywhere.herokuapp.com/https://services.odata.org/V2/(S(l0kdqvpxkpkgvjqs3s1zkqy3))/OData/OData.svc/";
            let model = new sap.ui.model.odata.v2.ODataModel(url);
            model.read("/Products",{
                success:function(data){
                    console.log(data.results);
                    dataModel.setData(data.results);
                    that.getView().setModel(dataModel,"mData");
                },
                error:function(err){
                    console.log(err);
                }
            })
        },
        onClickCreate:function(){
            this.getView().byId("idDG").open();
        },
        onCLickDGClose:function(){
            this.getView().byId("idDG").close();
        },
        onClickAdd:function(oEvent){
            let arr=oEvent.getSource().getParent().getContent();
            let obj=this.getView().getModel("mData").getData()[2];
            // let proArr=["Name","Description","Price","Rating"];
            // for(let i=1;i<=arr.length;i++){
            //     obj[proArr[i]]=arr[i].getValue();
            // };
            obj.ID = Number(arr[0].getValue());
            obj.Name = arr[1].getValue();
            obj.Description = arr[2].getValue();
            obj.Price = arr[3].getValue();
            obj.Rating = arr[4].getValue();
            console.log(obj);
            // obj["ID"]=Number(arr[0].getValue());
            // obj["ID"]=24;
            let url="https://cors-anywhere.herokuapp.com/https://services.odata.org/V2/(S(l0kdqvpxkpkgvjqs3s1zkqy3))/OData/OData.svc/";
            let model = new sap.ui.model.odata.v2.ODataModel(url,true);
            model.setUseBatch(false);
            model.create("/Products",obj,{
                success:function(data){
                 sap.m.MessageToast.show("Sucess");
                 this.onCLickDGClose();
                }.bind(this),
                error:function(err){
                    console.log(err);
                }
            })
        },
        onClickCell:function(oEvent){
            let index=oEvent.getParameters("rowContext").rowIndex;
            oEvent.getSource().setSelectedIndex(index)
            oEvent.getSource().getRows()[index].getCells()[3].setEditable(true);
        },
        onClickUpdate:function(){
            let index=this.getView().byId("idTable").getSelectedIndex();
            let uObj=this.getView().getModel("mData").getData()[index];
            let id=uObj.ID;
            let url="https://cors-anywhere.herokuapp.com/https://services.odata.org/V2/(S(l0kdqvpxkpkgvjqs3s1zkqy3))/OData/OData.svc/";
            let model = new sap.ui.model.odata.v2.ODataModel(url,true);
            model.setUseBatch(false);
            model.update("/Products("+id+")",uObj,{
                success:function(data){
              alert("Updated");
                //  this.onCLickDGClose();
                }.bind(this),
                error:function(err){
                    console.log(err);
                }
            })
        },
        onClickDelte:function(){
            let index=this.getView().byId("idTable").getSelectedIndex();
            let uObj=this.getView().getModel("mData").getData()[index];
            let id=uObj.ID;
            let url="https://cors-anywhere.herokuapp.com/https://services.odata.org/V2/(S(l0kdqvpxkpkgvjqs3s1zkqy3))/OData/OData.svc/";
            let model = new sap.ui.model.odata.v2.ODataModel(url,true);
            model.setUseBatch(false);
            model.remove("/Products("+id+")",{
                success:function(data){
              alert("Deleted");
                //  this.onCLickDGClose();
                }.bind(this),
                error:function(err){
                    console.log(err);
                }
            })
        },

        onDelete: function(oEvent) {
            var iRowIndex = oEvent.getParameter("rowIndex");
            var oTable =this.getView().byId("idTable").getSelectedIndex();
            // var oModel = oTable.getModel();
            // var aProducts = oModel.getProperty("/products");
            // var iSelectedIndex = oTable.getSelectedIndex();
      console.log("oTable",oTable,iRowIndex);
            // if (iSelectedIndex >= 0) {
            //   aProducts.splice(iSelectedIndex, 1);
            //   oModel.setProperty("/products", aProducts);
            //   MessageToast.show("Product deleted.");
            // } else {
            //   MessageToast.show("Please select a product to delete.");
            // }
          },

        });
    });
