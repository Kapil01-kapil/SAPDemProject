sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("arralist.controller.View1", {
            onInit: function () {
                var oData = {
                    values: [
                        {  },
                        { },
                        {  }
                    ]
                };
                var oModel = new JSONModel(oData);
                this.getView().setModel(oModel);
            },

  
            onInputChange: function (oEvent) {
                var sValue = oEvent.getParameter("value");
                var oModel = this.getView().getModel();
                var aData = oModel.getProperty("/values");

              
                if (aData.length > 0) {
                    // aData[0].Name = sValue;
                    // aData[0].Description = sValue;
                    // aData[0].Price = sValue;
                    oModel.setProperty("/values", aData);
                }
              
            },
    
            onAdd: function () {
                var oModel = this.getView().getModel();
                var aData = oModel.getProperty("/values");
                var sNewValue = this.getView().byId("inputValue").getValue();
                aData.push({ Name: sNewValue, Description: "", Price: "" });
                oModel.setProperty("/values", aData);
            },
    
            onSave: function () {
                var oModel = this.getView().getModel();
                var aData = oModel.getProperty("/values");
                // Save data logic here, e.g., send to backend
                console.log("Data saved", aData);
            },
    
            onClick:function(){
                this.getOwnerComponent().getRouter().navTo("RouteView2");

            }
        });
    });
