"use strict"

class LoginModel {
    static getUsernameField() { return element(by.id("username")) }
    static getPasswordField() { return element(by.id("password")) }
    static getSubmitButton() { return element(by.className("button")) }
}

describe("Check Login-Route Funktions", () => {
    it("NotLoggedIn Should Go to Login", () => {
        browser.get("#/record");

        expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + "#/login");
    })


    it("Log In to Home", () => {
        browser.get("#/login");
        LoginModel.getUsernameField().sendKeys(browser.params.username);
        LoginModel.getPasswordField().sendKeys(browser.params.password);
        LoginModel.getSubmitButton().click().then(e => {
            expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + "#/");
        })

    })
})
