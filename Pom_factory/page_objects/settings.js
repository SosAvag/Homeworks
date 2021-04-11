let  settings = function() {
    

        let settings_button = element(by.css("#button[aria-label='Settings'] > .style-scope"));
        let device_theme_button = element(by.xpath("//yt-icon[@id='secondary-icon']"));
        let dark_theme_button = element(by.xpath("//yt-formatted-string[.='Dark theme']"));
        
        this.click_on_settings = function () {
            settings_button.click();
        };
        this.click_on_device_theme = function(){
            device_theme_button.click()
        };
        this.click_on_dark_theme_button =function(){
            dark_theme_button.click()
        };

    
}
module.exports = new settings();