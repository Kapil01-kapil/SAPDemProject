sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("arralist.controller.View2", {
            onInit: function () {
                // Initialize the model with an array of values
               
            },
            onClick:function(){
                this.getOwnerComponent().getRouter().navTo("RouteView3");

            },
            onClicklist:function(){
                this.getOwnerComponent().getRouter().navTo("RouteView1");   
            }
        });
    });
