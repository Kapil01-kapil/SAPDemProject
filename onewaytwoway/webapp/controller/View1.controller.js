sap.ui.define([
    "sap/ui/core/mvc/Controller",
      "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("onewaytwoway.controller.View1", {
            onInit: function () {
                var oModel = new JSONModel({
                    name: "John Doe",
                    age: 30
                });
                oModel.setDefaultBindingMode('TwoWay'); 
                this.getView().setModel(oModel, "myModel");
            
                console.log("oModel",oModel);
                
                // console.log(this.getView().getModel().getProperty("/name"));

            },
    
            checkBindingType: function () {
                console.log("checkBindingType",this.getView().getModel('myModel').getData());
                
                // var oView = this.getView();
                // var oText = oView.byId("textElement");
                // // var oInput = oView.byId("inputElement");
                // var oneTome = oView.byId("inputElementOne");
                // // Check binding info for the Text control
                // var oTextBindingInfo = oText.getBindingInfo("text");
                // console.log("Text Binding Info:", oTextBindingInfo);
    
                // // Check binding info for the Input control
                // var oInputBindingInfo = oInput.getBindingInfo("value");
                // console.log("Input Binding Info:", oInputBindingInfo);

            }
        });
    });
