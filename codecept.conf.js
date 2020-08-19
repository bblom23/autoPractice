const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './Tests/*ServicePageTest.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://www.hollandbrazil.com/?lang=en',
      browser: 'chrome'
    }
  },
  include: {
    I: './steps_file.js',
    ContactFormPage: './pages/ContactFormPage.js',
    HomePage: './pages/HomePage.js',
    globalScopeStep: './steps/GlobalScope.js',
    servicesPagePage: './pages/ServicesPage.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'autoPractice',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}