// sap.ui.define([
//     "sap/ui/model/Filter", 
//     "sap/ui/comp/smartfilterbar/SmartFilterBar", 
    
//     "sap/m/ComboBox",




 

//     "sap/ui/model/FilterOperator",       // Import FilterOperator
//     "sap/m/MessageToast",
//     "sap/m/ComboBox"
// ], function (Filter, SmartFilterBar, ComboBox, MultiComboBox, MessageToast) {
//     "use strict";
//     return {
//         onAfterRendering:function() {
//             var oSmartFilterBar = this.byId("listReportfilter");
//             // var oDesigFilter = oSmartFilterBar.getAllFilterItems()[2].getControl();
//             console.log("oDesigFilter",oSmartFilterBar);
            
//             // oDesigFilter.setTokens([
//             //     new sap.m.Token({
//             //         key: "MANAGER",
//             //         text: "MANAGER"
//             //     })
//             // ]);
//         },
//         getCustomAppStateDataExtension: function (oCustomData) {
//             //the content of the custom field will be stored in the app state, so that it can be restored later, for example after a back navigation.
//             //The developer has to ensure that the content of the field is stored in the object that is passed to this method.
         

//               // Store the content of the custom MultiComboBox field in the app state.
//               if (oCustomData) {
//                 var oCustomField1 = this.oView.byId("idCustomFilterKey");
//                 if (oCustomField1) {
//                     oCustomData.Status = oCustomField1.getSelectedKeys();
//                 }
//             }
//         },
//         restoreCustomAppStateDataExtension: function (oCustomData) {
//             //in order to restore the content of the custom field in the filter bar, for example after a back navigation,
//             //an object with the content is handed over to this method. Now the developer has to ensure that the content of the custom filter is set to the control
//             if (oCustomData) {
//                 if (oCustomData.selectCustomFilter) {
//                     var oComboBox = this.oView.byId("idCustomFilterKey");
//                     oComboBox.setSelectedKeys(
//                         oCustomData.selectCustomFilter
//                     );
//                 }
//             }
//         },
//         onBeforeRebindTableExtension: function(oEvent) {
//             var oBindingParams = oEvent.getParameter("bindingParams");
//             oBindingParams.parameters = oBindingParams.parameters || {};

//             var oSmartTable = oEvent.getSource();
//             var oSmartFilterBar = this.byId(oSmartTable.getSmartFilterId());
//             if (oSmartFilterBar instanceof SmartFilterBar) {
//                 var oCustomControl = oSmartFilterBar.getControlByKey("CustomFilterKey");

                
//                 if (oCustomControl instanceof MultiComboBox) {
//                     var vCategory = oCustomControl.getSelectedKeys();

//                     if (vCategory.length > 0) {
//                         var aFilters = vCategory.map(function (sValue) {
//                             return new Filter("Status", FilterOperator.EQ, sValue);
//                         });

//                         // Combine individual filters with OR logic
//                         oBindingParams.filters.push(new Filter({
//                             filters: aFilters,
//                             and: false  // Use OR logic between filters
//                         }));
//                     } else {
//                         console.log("No filters selected.");
//                     }
//                 }
//                 // if (oCustomControl instanceof ComboBox) {
//                 //     var vCategory = oCustomControl.getSelectedKey();
//                 //     switch (vCategory) {
//                 //         // case "0" :
//                 //         // 	oBindingParams.filters.push(new Filter("Supplier", "EQ", "SAP"));
//                 //         // 	break;
//                 //         // case "1" :
//                 //         // 	oBindingParams.filters.push(new Filter("Supplier", "EQ", "OTHERS"));
//                 //         // 	break;
//                 //         default:
//                 //             break;
//                 //     }
//                 // }
//             }
//         },
//         btnCustomAction: function(oEvent) {
//             var extensionAPI = this.extensionAPI;
//             var aSelectContexts = extensionAPI.getSelectedContexts();
//             var aEmails = [];

//             for (var i = 0; i < aSelectContexts.length; i++) {
//                 aEmails.push(aSelectContexts[i].getProperty("Emailid"));
//             }

//             var toList = aEmails.toString();
//             var subject = "Warning Notice on Your Performance";
//             var body = "Hi,\nWe have noticed your performance is not up to the mark. If you have any queries, feel free to reach out.";

//             sap.m.URLHelper.triggerEmail(toList, subject, body);
//         MessageToast.show("Custom handler invoked.");
//         }
//     };
// });

sap.ui.define([
    "sap/ui/model/Filter", 
    "sap/ui/comp/smartfilterbar/SmartFilterBar", 
    "sap/m/MultiComboBox",          // Correct import
    "sap/ui/model/FilterOperator",  // Import FilterOperator
    "sap/m/MessageToast",
    "sap/m/ComboBox"                // Remove duplicate import if not needed
], function (Filter, SmartFilterBar, MultiComboBox, FilterOperator, MessageToast) {
    "use strict";
    
    return {
        onAfterRendering: function() {
            var oSmartFilterBar = this.byId("listReportfilter");
            console.log("SmartFilterBar Instance:", oSmartFilterBar);

            // Commented code; uncomment if required
            // var oDesigFilter = oSmartFilterBar.getAllFilterItems()[2].getControl();
            // oDesigFilter.setTokens([
            //     new sap.m.Token({
            //         key: "MANAGER",
            //         text: "MANAGER"
            //     })
            // ]);
        },

        getCustomAppStateDataExtension: function(oCustomData) {
            if (oCustomData) {
                var oCustomField1 = this.oView.byId("idCustomFilterKey");
                if (oCustomField1) {
                    oCustomData.Status = oCustomField1.getSelectedKeys();
                }
            }
        },

        restoreCustomAppStateDataExtension: function(oCustomData) {
            if (oCustomData) {
                var oComboBox = this.oView.byId("idCustomFilterKey");
                if (oComboBox && oCustomData.Status) {
                    oComboBox.setSelectedKeys(oCustomData.Status);
                }
            }
        },

        onBeforeRebindTableExtension: function(oEvent) {
            var oBindingParams = oEvent.getParameter("bindingParams");
            oBindingParams.parameters = oBindingParams.parameters || {};

            var oSmartTable = oEvent.getSource();
            var oSmartFilterBar = this.byId(oSmartTable.getSmartFilterId());

            if (oSmartFilterBar instanceof SmartFilterBar) {
                var oCustomControl = oSmartFilterBar.getControlByKey("CustomFilterKey");

                if (oCustomControl instanceof MultiComboBox) {
                    var vCategory = oCustomControl.getSelectedKeys();

                    if (vCategory.length > 0) {
                        var aFilters = vCategory.map(function (sValue) {
                            return new Filter("Status", FilterOperator.EQ, sValue);
                        });

                        oBindingParams.filters.push(new Filter({
                            filters: aFilters,
                            and: false  // OR logic between filters
                        }));
                    } else {
                        console.log("No filters selected.");
                    }
                }
            }
        },

        btnCustomAction: function(oEvent) {
            var extensionAPI = this.extensionAPI;
            var aSelectContexts = extensionAPI.getSelectedContexts();
            var aEmails = aSelectContexts.map(function(context) {
                return context.getProperty("Emailid");
            });

            var toList = aEmails.toString();
            var subject = "Warning Notice on Your Performance";
            var body = "Hi,\nWe have noticed your performance is not up to the mark. If you have any queries, feel free to reach out.";

            sap.m.URLHelper.triggerEmail(toList, subject, body);
            MessageToast.show("Custom handler invoked.");
        },
        BtnCreate: function(oEvent) {
        MessageToast.show("Custom handler invoked.");
        }
    };
});
