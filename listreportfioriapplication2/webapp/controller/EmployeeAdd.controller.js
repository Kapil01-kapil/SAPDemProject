sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("myApp.controller.EmployeeAdd", {

        onSubmit: function () {
            // Get the input values
            var sEmployeeName = this.byId("employeeNameInput").getValue();
            var sDepartment = this.byId("departmentInput").getValue();

            // Show message on submit (you can replace this with backend logic)
            if (sEmployeeName && sDepartment) {
                MessageToast.show("Employee: " + sEmployeeName + ", Department: " + sDepartment);
            } else {
                MessageToast.show("Please enter all details.");
            }
        }

    });
});
