const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './Tests/*ContactFormTest.js',
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