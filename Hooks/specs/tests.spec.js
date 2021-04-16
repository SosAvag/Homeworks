const { expect } = require('chai');
const { beforeEach } = require("mocha");
const { browser, element } = require('protractor');
const { protractor } = require('protractor/built/ptor');

describe('youtube  homepage ', function() {
  let EC = protractor.ExpectedConditions;
  let dark = element(by.xpath("//html[@dark='true']"));
  
  before(function () {
    browser.manage().window().maximize();
    browser.get('https://www.youtube.com/');
    let userName = 'ignatpetrosyan66';
    let password = 'Armenia$159';
    browser.wait(EC.elementToBeClickable($("#button[aria-label='Settings'] > .style-scope")), 5000);
    element(by.css("#button[aria-label='Settings'] > .style-scope")).click();
    browser.sleep(1000)
    element(by.xpath("//yt-icon[@id='secondary-icon']")).click();
    browser.sleep(1000)
    element(by.xpath("//yt-formatted-string[.='Dark theme']")).click();
    browser.sleep(2000)
 
    let avatarImg=element(by.xpath("//img[@alt='Avatar image']"));
    element(by.css("#text.size-small")).click();
    element(by.xpath("//input[@id='identifierId']")).sendKeys(userName);
    browser.wait(EC.elementToBeClickable(element(by.xpath("//div[@class='VfPpkd-RLmnJb']"))), 5000);
    element(by.xpath("//div[@class='VfPpkd-RLmnJb']")).click();
    browser.sleep(2000);
    element(by.xpath("//input[@name='password']")).sendKeys(password);
    element(by.id("passwordNext")).click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(avatarImg), 5000);
    browser.sleep(2000);
    browser.sleep(2000);
    browser.wait(EC.visibilityOf(dark), 5000);
   });

  it("should check that after refreshing suggested videos are different",async function(){
    browser.sleep(2000);
    const a = await element.all(by.css(".style-scope ytd-rich-item-renderer")).getText();
    await element(by.xpath("//yt-icon[@id='logo-icon']")).click();
    const b = await element.all(by.css(".style-scope ytd-rich-item-renderer")).getText();
    expect(JSON.stringify(a)).not.equal(JSON.stringify(b));
  })

  it('should add video to watch later section',async function(){
    await browser.actions().mouseMove(element(by.xpath("(//ytd-rich-item-renderer[@class='style-scope ytd-rich-grid-renderer'])[1]"))).perform();
    await element(by.xpath('(//yt-icon[@id="icon" and @class="style-scope ytd-thumbnail-overlay-toggle-button-renderer"])[1]')).click();
    browser.sleep(2000);
    await element(by.xpath("//yt-formatted-string[.='Watch later']")).click();
    browser.sleep(2000);
    browser.wait(EC.visibilityOf(element(by.xpath("(//ytd-rich-item-renderer[@class='style-scope ytd-rich-grid-renderer'])[1]"))), 5000);
    browser.sleep(2000)
  })
 
  it('should add video to history section', async function(){
      await element(by.xpath("(//ytd-rich-item-renderer[@class='style-scope ytd-rich-grid-renderer'])[1]")).click();
      browser.sleep(2000);
      await element(by.xpath("//yt-icon[@id='logo-icon']")).click();
      browser.sleep(2000);
      await element(by.xpath("//yt-formatted-string[.='History']")).click();
      browser.sleep(2000);
      browser.wait(EC.visibilityOf(element(by.xpath("(//ytd-rich-item-renderer[@class='style-scope ytd-rich-grid-renderer'])[1]"))), 5000);
      browser.sleep(2000)
    })

  it('should open warning pop up after klicking on whatch leter widhout signing in', async function(){
    element(by.xpath("//img[@alt='Avatar image']")).click();
    await browser.sleep(2000);
    await element(by.xpath("//yt-formatted-string[.='Sign out']")).click()
    await browser.sleep(2000);
    await browser.actions().mouseMove(element(by.xpath("(//ytd-rich-item-renderer[@class='style-scope ytd-rich-grid-renderer'])[1]"))).perform();
    await browser.sleep(2000);
    await element(by.xpath('(//yt-icon[@id="icon" and @class="style-scope ytd-thumbnail-overlay-toggle-button-renderer"])[1]')).click();
    await browser.sleep(2000);
    await browser.wait(EC.visibilityOf(element(by.xpath("//ytd-modal-with-title-and-button-renderer[@class='style-scope ytd-popup-container']"))), 5000);
    await browser.sleep(2000);
  })

});
