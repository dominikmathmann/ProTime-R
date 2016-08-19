"use strict";
var LoginModel = (function () {
    function LoginModel() {
    }
    LoginModel.getUsernameField = function () { return element(by.id("username")); };
    LoginModel.getPasswordField = function () { return element(by.id("password")); };
    LoginModel.getSubmitButton = function () { return element(by.className("button")); };
    LoginModel.login = function () {
        LoginModel.getUsernameField().sendKeys(browser.params.username);
        LoginModel.getPasswordField().sendKeys(browser.params.password);
        return LoginModel.getSubmitButton().click();
    };
    return LoginModel;
}());
exports.LoginModel = LoginModel;
var ErfassungModel = (function () {
    function ErfassungModel() {
    }
    ErfassungModel.getProjectField = function () { return element(by.name("project")); };
    ErfassungModel.getDescriptionField = function () { return element(by.name("desc")); };
    ErfassungModel.getStartField = function () { return element(by.css("r-dateinput[name='start']>input")); };
    ErfassungModel.getEndField = function () { return element(by.css("r-dateinput[name='end']>input")); };
    ErfassungModel.getTableFirstStartTimeEntry = function () { return element(by.css("tbody tr:nth-child(1)>td:nth-child(3)")); };
    ErfassungModel.getTableFirstLinkEntry = function () { return element(by.css("tbody tr:nth-child(1) a:nth-child(1)")); };
    ErfassungModel.getStartButton = function () { return element(by.id("start")); };
    ErfassungModel.getStopButton = function () { return element(by.id("stop")); };
    ErfassungModel.getSaveButton = function () { return element(by.id("save")); };
    ErfassungModel.getClearButton = function () { return element(by.id("clear")); };
    return ErfassungModel;
}());
exports.ErfassungModel = ErfassungModel;
var HomeModel = (function () {
    function HomeModel() {
    }
    HomeModel.getErfassungsButton = function () { return element(by.css("a[routerlink='/record']")); };
    return HomeModel;
}());
exports.HomeModel = HomeModel;
