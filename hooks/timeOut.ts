import { Before, setDefaultTimeout } from 'cucumber';
import { browser } from 'protractor';

setDefaultTimeout(600 * 1000);

Before({tags: "@clean"}, async function () {
    await browser.executeScript('window.sessionStorage.clear();');
    await browser.executeScript('window.localStorage.clear();');
    await browser.manage().deleteAllCookies();
});