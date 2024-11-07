sap.ui.define([
    "sap/ui/core/mvc/Controller",
     "sap/m/MessageToast",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, MessageBox) {
        "use strict";

        return Controller.extend("assementproject.controller.View1", {
            onInit: function () {

            },
            onLogin: function () {
                var sUsername = this.byId("usernameInput").getValue();
                var sPassword = this.byId("passwordInput").getValue();
    
                // Hardcoded credentials for demonstration
                if (sUsername === "admin" && sPassword === "password") {
                    MessageToast.show("Login Successful");
                    this.getOwnerComponent().getRouter().navTo("form");
                } else {
                    MessageBox.error("Invalid username or password.");
                }
              
                // Validate user credentials (for simplicity, bypassing validation)
                // var oApp = this.getView().getParent().getParent();
                // oApp.getController().onNavigateTo("assementproject.view.Form");

            }
    
        });
    });
