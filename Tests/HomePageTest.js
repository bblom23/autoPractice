const { confirmWorkingBannersNext } = require("../pages/HomePage");

Feature('HomePage');

Scenario('Checking homepage carrousel text', (I, HomePage) => {
I.amOnPage('https://www.hollandbrazil.com/?lang=en');
HomePage.confirmWorkingBannersNext();

});
