/// <reference path="../../typings/index.d.ts" />

import {LoginModel as mLogin, ErfassungModel as m, HomeModel as h} from './page-models'

describe("Erfassungs-Tests", () => {
    beforeEach(() => {
        browser.get("#/login")
        mLogin.login();
        h.getErfassungsButton().click();
    })

    it("Cancel Entry", () => {
        var firstRecordStartTime = m.getTableFirstStartTimeEntry().getText();
        m.getStartButton().click();
        browser.ignoreSynchronization = true; // defualt:false = protractor whould wait on the endless polling
        browser.sleep(2000)
        expect(m.getStartButton().isPresent()).toBeFalsy();
        m.getStopButton().click();
        browser.sleep(2000)
        browser.ignoreSynchronization = false;
        expect(m.getStopButton().isPresent()).toBeFalsy();
        m.getClearButton().click();

        expect(firstRecordStartTime).toEqual(m.getTableFirstStartTimeEntry().getText());
    })


    it("Submit Entry", () => {
        var firstRecordStartTime = m.getTableFirstStartTimeEntry().getText();
        m.getStartButton().click();
        browser.ignoreSynchronization = true; // defualt:false = protractor whould wait on the endless polling
        browser.sleep(2000)
        expect(m.getStartButton().isPresent()).toBeFalsy();
        m.getStopButton().click();
        browser.sleep(2000)
        browser.ignoreSynchronization = false;
        expect(m.getStopButton().isPresent()).toBeFalsy();
        m.getSaveButton().click();
        browser.sleep(2000)
        expect(firstRecordStartTime).not.toEqual(m.getTableFirstStartTimeEntry().getText());
    })


    it("Edit Entry", () => {
        m.getTableFirstLinkEntry().click();
        m.getStartField().clear();
        m.getStartField().sendKeys("01.01.2000 15:00");
        m.getSaveButton().click();
        var firstRecordStartTime = m.getTableFirstStartTimeEntry().getText();
        expect(firstRecordStartTime).toEqual("01.01 15:00");
    })

})