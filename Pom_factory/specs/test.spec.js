const homepage = require('../page_objects/homepage');
const settings = require('../page_objects/settings');
const sign_in = require('../page_objects/sign_in')
const { expect } = require('chai');
const { beforeEach } = require("mocha");
const { browser, element } = require('protractor');
const { protractor } = require('protractor/built/ptor');

describe('youtube  homepage ', function() {
  let EC = protractor.ExpectedConditions;
  
  
  before(function () {
    browser.manage().window().maximize();
    homepage.get('https://www.youtube.com/');
    settings.click_on_settings();
    browser.sleep(1000)
    settings.click_on_device_theme();
    browser.sleep(1000)
    settings.click_on_dark_theme_button();
    browser.sleep(2000)
    browser.wait(EC.visibilityOf(homepage.dark), 5000);
    browser.sleep(2000);
    sign_in.click_on_sign_in();
    browser.sleep(2000);
    sign_in.enter_userName('ignatpetrosyan66');
    sign_in.click_next_login()
    browser.sleep(2000);
    sign_in.enter_password('Armenia$159');
    sign_in.click_next_password();
    browser.wait(EC.visibilityOf(homepage.avatarImg), 5000);
    browser.sleep(2000);
    browser.sleep(2000);
  });

  
  it('should add video to watch later section',async function(){
    await browser.actions().mouseMove(homepage.first_element).perform();
    await homepage.click_on_wathch_later_button();
    browser.sleep(2000);
    await homepage.click_on_watch_leter_section();
    browser.sleep(2000);
    await browser.wait(EC.visibilityOf(homepage.first_element), 5000);
    browser.sleep(2000)
  })
 
  it('should add video to history section', async function(){
      homepage.click_to_play_second_element();
      browser.sleep(2000);
      await homepage.click_on_logo_button();
      browser.sleep(2000);
      await homepage.click_on_history_section();
      browser.sleep(3000);
      await browser.wait(EC.visibilityOf(homepage.second_element), 5000);
      browser.sleep(2000)
    });

  it('should open warning pop up after klicking on whatch leter widhout signing in', async function(){
    await homepage.avatarImg_click();
    await browser.sleep(3000);
    await homepage.click_sign_out_button();
    await browser.sleep(3000);
    await browser.actions().mouseMove(homepage.first_element).perform();
    await homepage.click_on_wathch_later_button();
    await browser.sleep(3000);
    await browser.wait(EC.visibilityOf(homepage.warning_massage_sign_outed), 5000);
    await browser.sleep(3000);
  })

});