const { browser, element } = require("protractor");

describe('angular homepage', function() {
  it('should open the homepage', function() {
    browser.get('http://www.angular.io');
    
    element(by.css('[type="search"]')).sendKeys("What is Angular");
    
    let  isVisible = element(by.css('.search-results'));
    expect(isVisible.isDisplayed()).toBe(true);
    
    browser.sleep(2000)
    
    element(by.xpath(".//a[@class='search-result-item']/child::span[normalize-space(.)='ng doc']")).click();

    browser.wait(ExpectedConditions.visibilityOf($('.cli-header')), 5000);

    expect(element(by.css('.no-anchor')).isDisplayed()).toBe(true);
    
    element(by.xpath(".//aio-nav-menu[@class='ng-tns-c18-1']//a[@href='docs']/span[.='Introduction']")).click();

    expect(element(by.xpath("//section[.='What is Angular']")).isPresent()).toBe(true);
   
    browser.sleep(2000)
  });

 
});
