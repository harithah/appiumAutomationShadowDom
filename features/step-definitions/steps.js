// import { Given, When, Then } from '@cucumber/cucumber';
const { Given, Then, When } = require('@cucumber/cucumber');
const page = require('../pageobjects/page.js');



Given(/^I am on the website$/, () => {
    page.open()
});

When(/^I click on header$/, () => {
    page.getShadowDom().click();
});

Then(/^I should be able to read the content$/, () => {
    var text = page.getShadowDom().getText();
    console.log("text=>" + text);
});

