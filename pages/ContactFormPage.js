const { I } = inject();

module.exports = {


  locators: {
    nameField: '.contact-form [name=Name]',
    subjectField: '.contact-form [name=Subject]',
    emailField: '.contact-form [name=E-mail]',
    messageField: '.contact-form [name=Message]',
    clearButton: 'Clear',
    submitButton: 'Submit',
    searchIcon: '.fa-search',
    searchField: '#searchform-header',
    
  },

  fillForm(name,subject,email,message) {
    I.fillField(this.locators.nameField,name);
    I.fillField(this.locators.subjectField,subject);
    I.fillField(this.locators.emailField,email);
    I.fillField(this.locators.messageField,message);

  },

  clearForm(){
    I.click(this.locators.clearButton);
  },

  submitForm(){
    I.click(this.locators.submitButton);

  },

  conductSearch(searchField) {
    I.forceClick(this.locators.searchIcon);
    I.fillField(this.locators.searchField, searchField);
    I.pressKey('Enter');

  }


}
