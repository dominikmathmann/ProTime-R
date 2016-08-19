/// <reference path="../../typings/index.d.ts" />
"use strict";
var page_models_1 = require('./page-models');
describe("Check Login-Route Funktions", function () {
    it("NotLoggedIn Should Go to Login", function () {
        browser.get("#/record");
        expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + "#/login");
    });
    it("Log In to Home", function () {
        browser.get("#/login");
        page_models_1.LoginModel.getUsernameField().sendKeys(browser.params.username);
        page_models_1.LoginModel.getPasswordField().sendKeys(browser.params.password);
        page_models_1.LoginModel.getSubmitButton().click().then(function (e) {
            expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + "#/");
        });
    });
});
