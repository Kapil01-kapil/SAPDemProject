sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("project2.controller.View1", {
            onInit: function () {
                var oModel = new sap.ui.model.json.JSONModel({
                    items: [
                        { name: "Item 1", description: "Description 1", fruitId:1 },
                        { name: "Itemkapil", description: "Description 2", fruitId:2 }
                    ]
                });
                this.getView().setModel(oModel);
            },
    
            onItemPress: function (oEvent) {
                var oItem = oEvent.getSource();
                var oContext = oItem.getBindingContext();
                var sPath = oContext.getPath();
                var oProduct = oContext.getModel().getProperty(sPath);
console.log("kmkm==>",oProduct);
                // var oItem = oEvent.getSource();
                // console.log("oItem=====>",oEvent.getParameters("rowContext").rowIndex);
                // var viewCartData = {
                //     "Customer": "XXXXXXXXXXXX",
                //     "Salesman": "xxxxxxxxxxxx",
                //     "TxnKey": "TXN1000103"
                // };
        
                var oModel = new sap.ui.model.json.JSONModel(oProduct);
                this.getOwnerComponent().setModel(oModel, "viewCartData");
              
                // var oBindingContext = oItem.getBindingContext();
                // console.log("oItem",oBindingContext);
                // // Get the path to the selected item
                // var sPath = oBindingContext.getPath();
                // console.log("sPath",sPath);
                // // var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                 var oRouter =  this.getOwnerComponent().getRouter()
                oRouter.navTo("detail",oProduct);
            }
        });
    });
