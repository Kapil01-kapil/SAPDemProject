sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("project1.controller.View1", {
            onInit: function () {
                var oData = {
                    Products: [
                        { A: 0, B: 0, C: 0, GST: 0, Total: 0 },
                        { A: 0, B: 0, C: 0, GST: 0, Total: 0 },
                        { A: 0, B: 0, C: 0, GST: 0, Total: 0 },
                        { A: 0, B: 0, C: 0, GST: 0, Total: 0 }
                    ]
                };
                var oModels = new JSONModel({
                    isLoginEnabled: false
                });
                this.getView().setModel(oModels);
                var oModel = new JSONModel(oData);
                this.getView().setModel(oModel);
            },
            onInputChanges: function () {
              
                // var sEmail = oView.byId("emailInput").getValue();
                // var sPassword = oView.byId("passwordInput").getValue();
                // var bIsLoginEnabled = sEmail.length > 0 && sPassword.length > 0;
                // oView.getModel().setProperty("/isLoginEnabled", bIsLoginEnabled);
                var sEmailValue = this.byId("emailInput").getValue();
                var sPasswordValue = this.byId("passwordInput").getValue();
                // Reference to the login button
                var oLoginButton = this.byId("loginButton");
                
                // Check if both email and password fields are not empty
                if (sEmailValue && sEmailValue.trim() !== "" &&
                sPasswordValue && sPasswordValue.trim() !== "") {
                oLoginButton.setEnabled(true);
            } else {
                oLoginButton.setEnabled(false);
            }
            },
            onEmailInputChange: function(oEvent) {
                // Get the value of the input field
                var sValue = oEvent.getParameter("value");
                // Reference to the login button
                var oLoginButton = this.byId("loginButton");
                
                // Check if the email field is not empty
                if (sValue && sValue.trim() !== "") {
                    oLoginButton.setEnabled(true);
                 //   oLoginButton.setVisible(true);
                } else {
                     oLoginButton.setEnabled(false);
                   // oLoginButton.setVisible(false);
                }
            },
            onLoginPress: function () {
                // Implement login logic here
                sap.m.MessageToast.show("Login button pressed!");
            },
            onInputChange: function (oEvent) {
                var oModel = this.getView().getModel();
                var oContext = oEvent.getSource().getBindingContext();
                var oProduct = oContext.getObject();
    
                var A = parseFloat(oProduct.A) || 0;
                var B = parseFloat(oProduct.B) || 0;
                var C = parseFloat(oProduct.C) || 0;
    
                var total = A + B + C;
                var gst = total * 0.18; // 18% GST
    
                oProduct.GST = gst.toFixed(2);
                oProduct.Total = (total + gst).toFixed(2);
    
                oModel.refresh();
            },
    
            formatGSTColor: function (gst) {
                console.log("gst==>",gst);
                gst = parseFloat(gst);
                if (gst > 100) {
                    return "highlightGSTHigh";
                } else if (gst > 0) {
                    return "highlightGSTLow";
                } else {
                    return "highlightGSTHigh";
                }
            },
    
            formatTotalColor: function (total) {
                return parseFloat(total) > 1000 ? "highlightTotalHigh" : "highlightGSTHigh";
            }
        });
    });
