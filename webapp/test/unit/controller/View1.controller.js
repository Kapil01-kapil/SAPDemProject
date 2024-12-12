/*global QUnit*/

sap.ui.define([
	"hsp/doctor/controller/View1.controller",
	 "sap/ui/model/json/JSONModel",
    "sap/ui/core/mvc/Controller"
], function (Controller, JSONModel) {
	"use strict";

	QUnit.module("View1 Controller");

	QUnit.test("I should test the View1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});


	QUnit.module("View1 Controller Tests", {
        beforeEach: function () {
            // Mock the View
            this.oViewStub = {
                setModel: sinon.stub(),
                getModel: sinon.stub()
            };

            // Mock the Controller
            this.oController = new Controller();
            sinon.stub(this.oController, "getView").returns(this.oViewStub);

            // Mock Models
            this.oComboBoxModel = new JSONModel({
                items: [{ key: "", text: "All" }]
            });
            this.oModel = new JSONModel();
        },
        afterEach: function () {
            this.oController.getView.restore();
        }
    });

    // QUnit.test("onInit - Should initialize models and set them to the view", function (assert) {
    //     // Act
    //     this.oController.onInit();

    //     // Assert
    //     assert.ok(this.oViewStub.setModel.calledWith(this.oComboBoxModel, "comboBoxModel"), "ComboBoxModel set to the view");
    //     assert.ok(this.oViewStub.setModel.calledWith(this.oModel, "model"), "Model set to the view");
    // });

});
