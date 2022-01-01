import {config} from "dotenv";
import hooks from './hooks.conf';

config();

exports.config = {
    specs: [
        './specs/*.spec.js',
    ],
    exclude:[
        './specs/**/client.spec.js'
    ],
    logLevel: 'info',
    bail: 0,
    baseUrl: process.env.BASE_URL,
    waitforTimeout: 10000,
    connectionRetryTimeout: 30000,
    connectionRetryCount: 1,
    services: ['devtools', 'geckodriver'],
    framework: 'mocha',
    reporters: ['spec', ['allure',{
        disableWebdriverStepsReporting: true
    }]],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    before: async function (capabilities, specs, browser) {
        browser.addCommand("smartClear", async function () {
            const text = await this.getValue();
            for(let char of text)
                await this.keys('Backspace');
        }, true);
    },

    ...hooks
}
