/// <reference path="../../typings/index.d.ts" />
"use strict";
var page_models_1 = require('./page-models');
describe("Erfassungs-Tests", function () {
    beforeEach(function () {
        browser.get("#/login");
        page_models_1.LoginModel.login();
        page_models_1.HomeModel.getErfassungsButton().click();
    });
    it("Cancel Entry", function () {
        var firstRecordStartTime = page_models_1.ErfassungModel.getTableFirstStartTimeEntry().getText();
        page_models_1.ErfassungModel.getStartButton().click();
        browser.ignoreSynchronization = true; // default:false = protractor whould wait on the endless polling
        browser.sleep(2000);
        expect(page_models_1.ErfassungModel.getStartButton().isPresent()).toBeFalsy();
        page_models_1.ErfassungModel.getStopButton().click();
        browser.sleep(2000);
        browser.ignoreSynchronization = false;
        expect(page_models_1.ErfassungModel.getStopButton().isPresent()).toBeFalsy();
        page_models_1.ErfassungModel.getClearButton().click();
        expect(firstRecordStartTime).toEqual(page_models_1.ErfassungModel.getTableFirstStartTimeEntry().getText());
    });
    it("Submit Entry", function () {
        var firstRecordStartTime = page_models_1.ErfassungModel.getTableFirstStartTimeEntry().getText();
        page_models_1.ErfassungModel.getStartButton().click();
        browser.ignoreSynchronization = true; // default:false = protractor whould wait on the endless polling
        browser.sleep(2000);
        expect(page_models_1.ErfassungModel.getStartButton().isPresent()).toBeFalsy();
        page_models_1.ErfassungModel.getStopButton().click();
        browser.sleep(2000);
        browser.ignoreSynchronization = false;
        expect(page_models_1.ErfassungModel.getStopButton().isPresent()).toBeFalsy();
        page_models_1.ErfassungModel.getSaveButton().click();
        browser.sleep(2000);
        expect(firstRecordStartTime).not.toEqual(page_models_1.ErfassungModel.getTableFirstStartTimeEntry().getText());
    });
    it("Edit Entry", function () {
        page_models_1.ErfassungModel.getTableFirstLinkEntry().click();
        page_models_1.ErfassungModel.getStartField().clear();
        page_models_1.ErfassungModel.getStartField().sendKeys("01.01.2000 15:00");
        page_models_1.ErfassungModel.getSaveButton().click();
        browser.sleep(2000);
        var firstRecordStartTime = page_models_1.ErfassungModel.getTableFirstStartTimeEntry().getText();
        expect(firstRecordStartTime).toEqual("01.01 15:00");
    });
});
