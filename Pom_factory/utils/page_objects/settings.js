class Settings {
    constructor() {
    

        this.settings_button = element(by.css("#button[aria-label='Settings'] > .style-scope"));
        this.device_theme_button = element(by.xpath("//yt-icon[@id='secondary-icon']"));
        this.dark_theme_button = element(by.xpath("//yt-formatted-string[.='Dark theme']"));
        
        this.click_on_settings = function () {
            this.settings_button.click();
        };
        this.click_on_device_theme = function(){
           this. device_theme_button.click()
        };
        this.click_on_dark_theme_button =function(){
            this.dark_theme_button.click()
        };

    }
      
    }

    module.exports = Settings;
    