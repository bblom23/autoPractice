// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({
  
    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.
    // a place of variables with GLOBAL scope to a project - note from Bob

    locators: {

      searchIcon: '.fa-search',
      searchField: '#searchform-header',

    },

    conductSearch(searchField) {
      this.forceClick(this.locators.searchIcon);
      this.fillField(this.locators.searchField, searchField);
    }

  })}
    
