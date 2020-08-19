const { I } = inject();

'use strict';
let I;

module.exports = {

  _init() {
    I = actor();
  },

  locators: {

    searchIcon: '.fa-search',
    searchField: '#searchform-header',
    HomeButton: '#main-menu [Name=Home]',
    AboutUs: '#main-menu [Name=About us]',
    HollandBrazilHouseButton: '#main-menu [Name=HollandBrazil House]',
    ServicesButton: '#main-menu [Name=Services]',
    ExportButton: '#main-menu [Name=Export]',
    ContactButton: '#main-menu [Name=Contact]',

  },

  conductSearch(searchField) {
    I.forceClick(this.locators.searchIcon);
    I.fillField(this.locators.searchField, searchField);
    I.pressKey('Enter');
    
  },

  clickHome() {
    I.forceClick(this.locators.HomeButton);

  },

  clickAboutUs(){
    I.forceClick(this.locators.AboutUs);

  },

  clickHBHouseButton() {
    I.forceClick(this.locators.HollandBrazilHouseButton);

  },

  clickServices() {
    I.forceClick(this.locators.ServicesButton);

  },

  clickExport() {
    I.forceClick(this.locators.ExportButton);

  },

  clickContact() {
    I.forceClick(this.locators.ContactButton);

  }

};
