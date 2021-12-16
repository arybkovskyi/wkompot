module.exports = {
    before: async function (capabilities, specs, browser) {
        browser.addCommand("smartClear", async function () {
            const text = await this.getValue();
            for(let char of text)
                await this.keys('Backspace');
        }, true);
    },
}