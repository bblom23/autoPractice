Feature('ServicePage');

Scenario('Check service page', (I, GlobalScope) => {

    I.amOnPage('/');
    GlobalScope.clickContact();


});
