const { I } = inject();

module.exports = {

locators: {

  columnOne: '.vc_column-inner [Name=Business Development]',
  columnTwo: '.vc_column-inner [Name=Administrative support]',
  columnThree: '.vc_column-inner [Name=HR & Staffing solution]',

},

confirmColumns() {
  I.see(this.locators.columnOne);
  I.see(this.locators.columnTwo);
  I.see(this.locators.columnThree);
  
}


}
