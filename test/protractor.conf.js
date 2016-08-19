exports.config = {
    params: {
        username: "dominik.mathmann@gedoplan.de",
        password: "abc123"
    },
    baseUrl: 'http://localhost:4300/',
    exclude: [],
    framework: 'jasmine2',
    allScriptsTimeout: 110000,
    jasmineNodeOpts: {
        showTiming: true,
        showColors: true,
        isVerbose: false,
        includeStackTrace: false,
        defaultTimeoutInterval: 400000
    },
    directConnect: true,
    capabilities: {
        'browserName': 'chrome'
    },
    onPrepare: function () {
        var SpecReporter = require('jasmine-spec-reporter');
        jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: true}));
        browser.ignoreSynchronization = false;
        browser.baseUrl = "http://localhost:4300/";
    },
    /**
     * Angular 2 configuration
     *
     * useAllAngular2AppRoots: tells Protractor to wait for any angular2 apps on the page instead of just the one matching
     * `rootEl`
     *
     */
    useAllAngular2AppRoots: true
};