import {config} from "dotenv";
import hooks from './hooks.conf';

config();

exports.config = {
    specs: [
        './features/**/*.feature',
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
    framework: 'cucumber',
    reporters: ['spec', ['allure',{
        disableWebdriverStepsReporting: true
    }]],

    cucumberOpts: {
        // <string[]> (file/dir) require files before executing features
        require: ['./steps/common.steps.js'],
        // <boolean> show full backtrace for errors
        backtrace: false,
        // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        requireModule: [],
        // <boolean> invoke formatters without executing steps
        dryRun: false,
        // <boolean> abort the run on first failure
        failFast: false,
        // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        format: ['pretty'],
        // <boolean> hide step definition snippets for pending steps
        snippets: true,
        // <boolean> hide source uris
        source: true,
        // <string[]> (name) specify the profile to use
        profile: [],
        // <boolean> fail if there are any undefined or pending steps
        strict: false,
        // <string> (expression) only execute the features or scenarios with tags matching the expression
        tagExpression: '',
        // <number> timeout for step definitions
        timeout: 60000,
        // <boolean> Enable this config to treat undefined definitions as warnings.
        ignoreUndefinedDefinitions: false
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
