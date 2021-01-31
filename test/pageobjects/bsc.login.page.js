const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BscLoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnLogin() { return $('#loginSubmit') }
    get inputUsername() { return $('#usernamelogin') }
    get inputPassword() { return $('#passwordlogin') }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login(username, password) {
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnLogin.click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open('login');
    }
}

module.exports = new BscLoginPage();
