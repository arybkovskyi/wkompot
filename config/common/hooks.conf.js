import allureReporter from '@wdio/allure-reporter';

module.exports = {
    before: async function (capabilities, specs, browser) {
        browser.addCommand("smartClear", async function () {
            const text = await this.getValue();
            for(let char of text)
                await this.keys('Backspace');
        }, true);
    },

    afterScenario: async function (world, result, context) {
        if (!result.passed) {
            await browser.takeScreenshot();
            allureReporter.addAttachment('URL', await browser.getUrl(), 'text/plain');
        }
    }
}