const { I } = inject();

module.exports = {

locators: {

    bannerOne: "SUCCESSFUL BUSINESS DEVELOPMENT IN BRAZIL",
    bannerTwo: "Full-service from the initial market-scan",
    bannerThree: "YOUR COMPANY IN BRAZIL",
    nextArrow: '.ls-nav-next',
    previousArrow: '.ls-nav-prev',
 
  },
  
  confirmWorkingBannersNext() {
    I.seeInCurrentUrl('/?lang=en');
    I.waitForText(this.locators.bannerOne, 5);
    I.forceClick(this.locators.nextArrow);
    I.waitForText(this.locators.bannerTwo, 5);
    I.forceClick(this.locators.nextArrow);
    I.waitForText(this.locators.bannerThree, 5);

  },

  clickNext(){
    I.forceClick(this.locators.nextArrow);
  }

};


