sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel"
    ],
    function(BaseController,JSONModel) {
      "use strict";
  
      return BaseController.extend("assementproject.controller.App", {
        onInit: function() {
          this.getOwnerComponent().getRouter().initialize();
       

          // Create a local JSON model to store form data
          var oData = {
              currentMaterial: {
                  MaterialName: "",
                  MaterialCode: "",
                  Quantity: "",
                  UnitPrice: "",
                  DateOfOrder: "",
                  DateOfDelivery: "",
                  InvoiceCopy: "",
                  Remarks: ""
              },
              materials: [],  // Array to store material entries
              materialNames: [
                { key: "Material1", text: "Material 1" },
                { key: "Material2", text: "Material 2" },
                { key: "Material3", text: "Material 3" }
            ],
            materialCodes: [
                { key: "M001", text: "M001" },
                { key: "M002", text: "M002" },
                { key: "M003", text: "M003" }
            ]
          };

          var oModel = new JSONModel(oData);
          this.getView().setModel(oModel, "localModel");
        }
      });
    }
  );
  