/// <reference path="../../typings/index.d.ts" />

import {LoginModel as m} from './page-models'

describe("Check Login-Route Funktions", () => {
    it("NotLoggedIn Should Go to Login", () => {
        browser.get("#/record");

        expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + "#/login");
    })


    it("Log In to Home", () => {
        browser.get("#/login");
        m.getUsernameField().sendKeys(browser.params.username);
        m.getPasswordField().sendKeys(browser.params.password);
        m.getSubmitButton().click().then( (e) => {
            expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + "#/");
        })

    })
})