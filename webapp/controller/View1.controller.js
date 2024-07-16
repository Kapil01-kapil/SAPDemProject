sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/date/UI5Date",
    "sap/m/MessageToast",
       "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/json/JSONModel",

],
    function (Controller, UI5Date, MessageToast, Filter, FilterOperator, JSONModel) {
        "use strict";

        return Controller.extend("hsp.doctor.controller.View1", {
            onInit: function () {
             
                var oComboBoxModel = new JSONModel({
                    items: [{ key: "", text: "All" }]
                });
                this.getView().setModel(oComboBoxModel, "comboBoxModel");
              

                let result = []
                let model = new sap.ui.model.json.JSONModel()
                model.setData(result)
               
                this.getView().setModel(model, "model")


                var oModel = new sap.ui.model.odata.v2.ODataModel('https://cors-anywhere.herokuapp.com/https://services.odata.org/V2/OData/OData.svc/');
                oModel.read("/Products", {
                    success: function (oData) {
                        var aProducts = oData.results;
                        var oContactModel = this.getView().getModel("model");
                        oContactModel.setProperty("/", aProducts);
                        console.log("===>",oData.results);
                        this._populateComboBox(oData.results);

                    }.bind(this),
                    error: function (oError) {
                        console.error(oError);
                    }
                });


            },
            _populateComboBox: function (aProducts) {
                var aUniqueNames = [...new Set(aProducts.map(product => product.Name))];

                var aItems = aUniqueNames.map(name => ({
                    key: name,
                    text: name
                }));
    
                aItems.unshift({ key: "", text: "All" });
    console.log("aItems==>",aItems);
                var oComboBoxModel = this.getView().getModel("comboBoxModel");
                oComboBoxModel.setProperty("/items", aItems);
    
            },
            onSeachChange: function (oEvent) {
                var sQuery = oEvent.getParameter("newValue");

                // Get the contacts binding
                var oTable = this.getView().byId("productTable");
                var oTables = this.getView().byId("productTables");
                var oBinding = oTable.getBinding("items");
                var oBindings =oTables.getBinding("rows");
                // Create filters based on the query
                var aFilters = [];
                if (sQuery && sQuery.length > 0) {
                    var oFilterName = new Filter("Name", FilterOperator.Contains, sQuery);
                    var oFilterMobile = new Filter("Mobile", FilterOperator.Contains, sQuery);
                    var oFilterAddress = new Filter("Address", FilterOperator.Contains, sQuery);
                    aFilters.push(new Filter({
                        filters: [oFilterName, oFilterMobile, oFilterAddress],
                        and: false
                    }));
                }
    
                // Apply filters to the binding
                oBinding.filter(aFilters);
                oBindings.filter(aFilters);
                // var oItem = oEvent.getSource().getBindingContext().getObject();

                // // Update the enabled state in the model
                // oItem.enabled = bState;
            },
            onFilterChange: function (oEvent) {
                // Get the selected key from the ComboBox
                var sSelectedKey = oEvent.getParameter("selectedItem").getKey();
    
                // Get the contacts binding
                var oTable = this.getView().byId("productTable");
                var oTables = this.getView().byId("productTables");
                var oBinding = oTable.getBinding("items");
             
                var oBindings = oTables.getBinding("rows");
                // Create filter based on the selected key for Name field only
                var aFilters = [];
                if (sSelectedKey && sSelectedKey.length > 0) {
                    var oFilterName = new Filter("Name", FilterOperator.Contains, sSelectedKey);
                    var oFilterMobile = new Filter("Description", FilterOperator.Contains, sSelectedKey);
                    var oFilterAddress = new Filter("Price", FilterOperator.Contains, sSelectedKey);
                    aFilters.push(new Filter({
                        filters: [oFilterName, oFilterMobile, oFilterAddress],
                        and: false
                    }));
                }
    
                // Apply filters to the binding
                oBinding.filter(aFilters);
                oBindings.filter(aFilters);
            },
            onRowSelectionChange: function (oEvent) {
                var oTable = oEvent.getSource();
                console.log("oTable==>",oTable);
                var iSelectedIndex = oTable.getSelectedIndex();
                var oModel = this.getView().getModel("model");
                var oSelectedRow = oModel.getProperty(oTable.getContextByIndex(iSelectedIndex).getPath());
                console.log("oTable===>",oSelectedRow);
                if (oSelectedRow) {
                    // MessageToast.show("Selected Product: " + oSelectedRow.Name);
                    var oContext = oTable.getContextByIndex(iSelectedIndex);
                    var oDetailVBox = this.byId("productDetails");
                    oDetailVBox.setBindingContext(oContext, "model");
                    oDetailVBox.setVisible(true);
    
                }
            }


        });
    });
