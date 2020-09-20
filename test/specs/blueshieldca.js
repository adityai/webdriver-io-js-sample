const BscLoginPage = require('../pageobjects/bsc.login.page');

describe('blueshieldca.com page', () => {
    it('should have the right title', async () => {
        await browser.url('https://blueshieldca.com');
        await (browser.maximizeWindow());
        await expect(browser).toHaveTitle('Home | Blue Shield of California');
        await expect($('#loginAccountButton > a')).toExist();
        BscLoginPage.open();
        BscLoginPage.login();
        await browser.saveScreenshot("./temp.png");
    })
})
