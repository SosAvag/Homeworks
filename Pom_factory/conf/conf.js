const yargs = require('yargs').argv

exports.config = {
  seleniumAddress:'http://localhost:4444/wd/hub/',
  //directConnect: true,
       
    Capabilities:{
        'browserName': 'chrome'
      }, 
  
    framework: 'mocha',
    onPrepare: function(){
        browser.waitForAngularEnabled(false)
    },
    onComplete: function(){
        browser.close()
    },
    
    specs: ['../specs/test.spec.js'],
   // baseUrl = 'https://www.youtube.com/',
    
    getPageTimeout: 10000,
    mochaOpts: {
        reporter: 'spec',
        timeout: 40000
    }
  };