/// <reference path="../../typings/index.d.ts" />

describe('Check Welcome Page', function() {
  it('Header', function() {
    browser.get('/');
    var header = element(by.tagName("p"));
    expect(header.getCssValue("color")).toBe("rgba(0, 0, 255, 1)");
    expect(header.getText()).toBe("Hello");
  });
});

