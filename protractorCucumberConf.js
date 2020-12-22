const path = require('path');
require('./register');
const argv = require('yargs').argv;
var reporter = require('cucumber-html-reporter');

exports.config = {
  directConnect: true,
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--disable-browser-side-navigation'],
    },
  },
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  specs: ['./Tests/**/*.feature'],

  cucumberOpts: {
    require: ['./Tests/**/*.ts', './hooks/*.ts'],
    tags: argv.tags || '@test',
    format: 'json:reports/cucumber_report.json',
  },
  onPrepare: async () => {
    await browser.manage().window().maximize();
    await browser.waitForAngularEnabled(false);
  },
  onComplete: async () => {
    var options = {
      theme: 'bootstrap',
      jsonFile: 'reports/cucumber_report.json',
      output: 'reports/cucumber_report.html',
      reportSuiteAsScenarios: true,
      scenarioTimestamp: true,
      launchReport: true,
    };
    reporter.generate(options);
  },
};
