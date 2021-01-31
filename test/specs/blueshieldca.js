const BscLoginPage = require('../pageobjects/bsc.login.page');

describe('blueshieldca.com page', () => {
    it('should have the right title', async () => {
        expect(browser).toHaveTitle('Home | Blue Shield of California');
        expect($('#loginAccountButton > a')).toExist();
        BscLoginPage.open("login");
        BscLoginPage.login("test", "test2");
        browser.saveScreenshot("./temp.png");
    })
})
