describe('Auth', function() {
    it('Successful log in', async function(){
        await browser.url('/user/login');
        await expect($('.login-form-button')).toBeDisabled();
        await $('[qa-id="email"]')
            .setValue('diwej38033@luxiu2.com');
        await $('[qa-id="password"]')
            .setValue('Qwerty123');
        await expect($('.login-form-button')).toBeEnabled();
        await $('.login-form-button').click();
        await expect($('img[alt="avatarIcon"]')).toBeDisplayed();
        await browser.pause('3000')
    })
});