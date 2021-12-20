import LoginPage from '../pages/login.page'
import ProfilePage from '../pages/profile.page'

describe('Auth', function() {
    beforeEach(async function(){
        await LoginPage.open();
    })

    it.only('Successful log in', async function(){
        await expect(LoginPage.btnSubmit).toBeDisabled();
        await LoginPage.login(process.env.LOGIN,process.env.PASSWORD);
        await expect(ProfilePage.iconUser).toBeDisplayed();
    })

    it('Log in attempt with invalid username', async function(){
        await LoginPage.login('testinvalid@luxiu2.com','InvalidTest');
        await expect(LoginPage.notification).toHaveText('Email is not registered')
    })

    it('Log in attempt with invalid passw0rd', async function(){
        await LoginPage.login(process.env.LOGIN,'InvalidTest');
        await expect(LoginPage.notification).toHaveText('Incorrect password')
    })

    it('Credentials are required', async function(){
        await LoginPage.inputUsername.setValue('test');
        await LoginPage.inputUsername.smartClear();
        await expect(LoginPage.loginError).toHaveText('Required');
        await LoginPage.inputPassword.setValue('test');
        await LoginPage.inputPassword.smartClear();
        await expect(LoginPage.passwordError).toHaveText('Required')
    })

});