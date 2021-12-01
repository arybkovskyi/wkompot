import LoginPage from '../pages/login.page'
import ProfilePage from '../pages/profile.page'

describe('Auth', function() {
    it('Successful log in', async function(){
        await LoginPage.open();
        await expect(LoginPage.btnSubmit).toBeDisabled();
        await LoginPage.login('diwej38033@luxiu2.com','Qwerty123');
        await expect(ProfilePage.iconUser).toBeDisplayed();
    })
});