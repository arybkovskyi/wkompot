import LoginPage from '../pages/login.page'
import ProfilePage from '../pages/profile.page'

describe('Auth', function() {
    beforeEach(async function(){
        await LoginPage.open();
    })

    it('Successful log in', async function(){
        await expect(LoginPage.btnSubmit).toBeDisabled();
        await LoginPage.login(process.env.LOGIN,process.env.PASSWORD);
        await expect(ProfilePage.iconUser).toBeDisplayed();
    })
});