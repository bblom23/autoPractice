Feature('contact-form');

Scenario('Fill contact form', (I, ContactFormPage) => {
    I.amOnPage('https://www.hollandbrazil.com/hollandbrazil-house/?lang=en');
    ContactFormPage.fillForm('Bob', 'Testing', 'testing@testing.com', 'this is a test',);
    ContactFormPage.clearForm();
    
});
