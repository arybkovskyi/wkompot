import Page from './page';

class LoginPage extends Page {
    get inputUsername() {return $('[qa-id="email"]')}
    get inputPassword() {return $('[qa-id="password"]')}
    get btnSubmit() {return $('.login-form-button')}
    get notification() {return $('.ant-notification-notice-message')}
    get loginError() {return $('//div[@data-qa=\'normalEmail\']//div[@class=\'ant-form-item-explain-error\']')}
    get passwordError() {return $('//div[div[@class=\'ant-form-item-control-input\']//input[@qa-id=\'password\']]//div[@class=\'ant-form-item-explain-error\']')}

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await expect(this.btnSubmit).toBeEnabled()
        await this.btnSubmit.click();
    }

    open() {
        return super.open('/user/login');
    }
}

export default new LoginPage();
