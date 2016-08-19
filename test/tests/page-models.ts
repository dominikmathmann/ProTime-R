"use strict"

export class LoginModel {
    static getUsernameField() { return element(by.id("username")) }
    static getPasswordField() { return element(by.id("password")) }
    static getSubmitButton() { return element(by.className("button")) }

    static login() {
        LoginModel.getUsernameField().sendKeys(browser.params.username);
        LoginModel.getPasswordField().sendKeys(browser.params.password);
        return LoginModel.getSubmitButton().click();
    }
}

export class ErfassungModel {
    static getProjectField() { return element(by.name("project")) }
    static getDescriptionField() { return element(by.name("desc")) }
    static getStartField() { return element(by.css("r-dateinput[name='start']>input")) }
    static getEndField() { return element(by.css("r-dateinput[name='end']>input")) }
    static getTableFirstStartTimeEntry() { return element(by.css("tbody tr:nth-child(1)>td:nth-child(3)")) }
    static getTableFirstLinkEntry() { return element(by.css("tbody tr:nth-child(1) a:nth-child(1)")) }
    static getStartButton() { return element(by.id("start")) }
    static getStopButton() { return element(by.id("stop")) }
    static getSaveButton() { return element(by.id("save")) }
    static getClearButton() { return element(by.id("clear")) }
}

export class HomeModel{
    static getErfassungsButton() { return element(by.css("a[routerlink='/record']"))}
}