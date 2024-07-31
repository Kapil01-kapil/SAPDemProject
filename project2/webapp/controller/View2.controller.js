sap.ui.define([
    "sap/ui/core/mvc/Controller",
      "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("project2.controller.View2", {
            onInit: function () {
                // var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                var oRouter = this.getOwnerComponent().getRouter();
              oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);

              
            },
    
            _onObjectMatched: function (oEvent) {
                var sItemId = oEvent.getParameter("arguments");
                var oModel = this.getView().getModel("viewCartData");
                console.log("sItemId==>",sItemId,oModel.oData
                );
                
//formate oData

                var oModel = this.getView().getModel();
                var oItem = oModel.getProperty("/items/" + sItemId);
                oModel.setProperty("/selectedItem", oItem);
                var sPath = '/fruits/' + sItemId;
                this.getView().bindElement(sPath);
                var oModels = new JSONModel(oModel.oData);

                // Set the model to the view
                this.getView().setModel(oModels);

            },
    
            onNavBack: function () {
                var oRouter = this.getOwnerComponent().getRouter();
                // var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("RouteView1");
            }
        });
    });
