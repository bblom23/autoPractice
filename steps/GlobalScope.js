const { I } = inject();

module.exports = {

  locators: {

    searchIcon: '.fa-search',
    searchField: '#searchform-header',

  },

  conductSearch(searchField) {
    I.forceClick(this.locators.searchIcon);
    I.fillField(this.locators.searchField, searchField);
    I.pressKey('Enter');
    
  }

};
