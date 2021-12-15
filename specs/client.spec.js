import LoginPage from '../pages/login.page'
import ProfilePage from '../pages/profile.page'
import ClientsPage from '../pages/clients.page'
// faker = require('faker')
import faker from 'faker'

describe('client', function(){
    let email;

    before(async function(){
        await LoginPage.open();
        await LoginPage.login(process.env.LOGIN, process.env.PASSWORD);
        await ProfilePage.navbar.clients.click();
        email = faker.internet.email();
    })
    it('creation', async function(){
        await ClientsPage.createClient.click();
        await expect (ClientsPage.clientCreation.buttonSave).toBeDisabled();
        await ClientsPage.clientCreation.firstName.setValue(faker.name.firstName('male'));
        await expect (ClientsPage.clientCreation.buttonSave).toBeEnabled();
        await ClientsPage.clientCreation.lastName.setValue(faker.name.lastName('male'));
        await ClientsPage.clientCreation.email.setValue(email);
        await ClientsPage.clientCreation.buttonSave.click();
        await expect (ClientsPage.getItemByEmail(email)).toBeDisplayed();
        await browser.pause(3000)
    })
    it('deletion', async function(){
        await ClientsPage.deleteClient(email);
        await expect(ClientsPage.getItemByEmail(email)).not.toBeExisting()
    })
})