sap.ui.define([
    "sap/ui/core/mvc/Controller",
     "sap/m/MessageToast",
    "sap/m/MessageBox"
], function (Controller,MessageToast, MessageBox) {
    "use strict";

    return Controller.extend("assementproject.controller.Form", {

        onCreate: function () {
            var oView = this.getView();
            var oModel = oView.getModel("localModel");
            var oMaterial = oModel.getProperty("/currentMaterial");

            // Perform validation
            if (this._validateForm(oMaterial)) {
                // Add the material data to the materials array
                var aMaterials = oModel.getProperty("/materials");
                aMaterials.push(oMaterial);

                // Update the model with the new materials array and clear form
                oModel.setProperty("/materials", aMaterials);
                oModel.setProperty("/currentMaterial", {});  // Reset the form

                MessageToast.show("Record Created!");

                // Navigate to the Table view
                this.getOwnerComponent().getRouter().navTo("table");
            }
        },

        onClear: function () {
            // Clear form data by resetting the currentMaterial in the model
            this.getView().getModel("localModel").setProperty("/currentMaterial", {});
            this._resetValueState();  // Reset value states
            MessageToast.show("Form Cleared!");
        },
        onFileUploadChange: function (oEvent) {
            var oFileUploader = oEvent.getSource();
            var sId = oFileUploader.getId().split("--").pop();
            var oFile = oEvent.getParameter("files")[0];

            if (oFile) {
                var oReader = new FileReader();
                oReader.onload = function (e) {
                    var sContent = e.target.result;  // Base64 content
                    var oModel = this.getView().getModel("localModel");

                    // Set appropriate property in the model
                    if (sId === "invoiceCopy") {
                        oModel.setProperty("/currentMaterial/InvoiceCopy", sContent);
                    } else if (sId === "excelUploader") {
                        oModel.setProperty("/currentMaterial/ExcelFile", sContent);
                    } else if (sId === "imageUploader") {
                        oModel.setProperty("/currentMaterial/ImageFile", sContent);
                    }
                }.bind(this);

                oReader.readAsDataURL(oFile);
            }
        },
        _validateForm: function (oMaterial) {
            var bValid = true;
            this._resetValueState();  // Reset all value states

            // Check Material Name
            if (!oMaterial.MaterialName) {
                this.byId("materialName").setValueState("Error").setValueStateText("Material Name is required");
                bValid = false;
            }

            // Check Material Code
            if (!oMaterial.MaterialCode) {
                this.byId("materialCode").setValueState("Error").setValueStateText("Material Code is required");
                bValid = false;
            }

            // Check Quantity
            if (!oMaterial.Quantity || isNaN(oMaterial.Quantity) || parseInt(oMaterial.Quantity) <= 0) {
                this.byId("quantity").setValueState("Error").setValueStateText("Quantity must be a positive number");
                bValid = false;
            }

            // Check Unit Price
            if (!oMaterial.UnitPrice || isNaN(oMaterial.UnitPrice) || parseFloat(oMaterial.UnitPrice) <= 0) {
                this.byId("unitPrice").setValueState("Error").setValueStateText("Unit Price must be a positive number");
                bValid = false;
            }

            // Check Dates
            if (!oMaterial.DateOfOrder) {
                this.byId("dateOfOrder").setValueState("Error").setValueStateText("Date of Order is required");
                bValid = false;
            }
            if (!oMaterial.DateOfDelivery) {
                this.byId("dateOfDelivery").setValueState("Error").setValueStateText("Date of Delivery is required");
                bValid = false;
            }

            // Invoice Copy is optional, no validation needed

            // If not valid, show an error message box
            if (!bValid) {
                MessageBox.error("Please correct the highlighted fields before submitting.");
            }

            return bValid;
        },

        _resetValueState: function () {
            // Reset the value state of all form fields
            this.byId("materialName").setValueState("None");
            this.byId("materialCode").setValueState("None");
            this.byId("quantity").setValueState("None");
            this.byId("unitPrice").setValueState("None");
            this.byId("dateOfOrder").setValueState("None");
            this.byId("dateOfDelivery").setValueState("None");
        }

    });
});
