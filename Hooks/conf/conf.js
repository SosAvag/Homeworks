const yargs = require('yargs').argv

exports.config = {
    directConnect: true,

    
    multiCapabilities: [{
        'browserName': 'chrome'
      }, {
        'browserName': 'chrome'
      }],
  
    framework: 'mocha',
    onPrepare: function(){
        browser.waitForAngularEnabled(false)
    },
    onComplete: function(){
        browser.close()
    },
  
    specs: ['../specs/tests.spec.js'],
   // baseUrl = 'https://www.youtube.com/',
    
    getPageTimeout: 10000,
    mochaOpts: {
        reporter: 'spec',
        timeout: 40000
    }
  };