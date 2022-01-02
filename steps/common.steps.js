import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pages/login.page';
import ProfilePage from '../pages/profile.page';

When(/^I login with (.+) and (.+)$/, async function(username, password) {
    await LoginPage.login(username, password);
});

When(/^I open login page$/, async function() {
    await LoginPage.open();
});

Then(/^I should see a user icon$/, async function() {
    await expect(ProfilePage.iconUser).toBeDisplayed();
});

Then(/^I should see a notification with text (.*)$/, async function(message) {
    await expect(LoginPage.notification).toHaveText(message);
});

When(/^I enter username (.*) and clear it$/, async function(username) {
    await LoginPage.inputUsername.setValue(username);
    await LoginPage.inputUsername.smartClear();
});

Then(/^I should see validation error for username field$/, async function() {
    await expect(LoginPage.loginError).toHaveText('Required');
});

When(/^I enter password (.*) and clear it$/, async function(password) {
    await LoginPage.inputPassword.setValue(password);
    await LoginPage.inputPassword.smartClear();
});

Then(/^I should see validation error for password field$/, async function() {
    await expect(LoginPage.passwordError).toHaveText('Required');
});