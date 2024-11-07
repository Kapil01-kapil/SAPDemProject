sap.ui.define([
    "sap/ui/core/mvc/Controller",
      "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("binding.controller.View1", {
            onInit: function () {
  // Create a JSON model instance with some data
  var oModel = new sap.ui.model.json.JSONModel({
    person: {
      firstName: "John",
      lastName: "Doe",
      age: 30
    },
    products: [
      { name: "Product A", price: 100 },
      { name: "Product B", price: 150 }
    ]
  });
  this.getView().setModel(oModel);
            },
            currencyValue: function(value) {
              console.log("value==>",value);
              
              if (!value) {
                  return "";
              }else{
                return 'kapil'; 
              }
             // Format to 2 decimal places
          }
        });
    });
