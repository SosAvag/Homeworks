class homepage {
    constructor() {
        this.sign_out_button = element(by.xpath("//yt-formatted-string[.='Sign out']"));
        this.logo_button = element(by.xpath("//yt-icon[@id='logo-icon']"));
        this.avatarImg=element(by.xpath("//img[@alt='Avatar image']"));
        this.dark = element(by.xpath("//html[@dark='true']"));
        this.first_element = element(by.xpath("(//ytd-rich-item-renderer[@class='style-scope ytd-rich-grid-renderer'])[1]"));
        this.second_element = element(by.xpath("(//ytd-rich-item-renderer[@class='style-scope ytd-rich-grid-renderer'])[2]"));
        this.first_video_watch_later = element(by.xpath('(//yt-icon[@id="icon" and @class="style-scope ytd-thumbnail-overlay-toggle-button-renderer"])[1]'));
        this.watch_leter_section_button = element(by.xpath("//yt-formatted-string[.='Watch later']"));
        this.history_section_button = element(by.xpath("//yt-formatted-string[.='History']"));
        this.warning_massage_sign_outed = element(by.xpath("//ytd-modal-with-title-and-button-renderer[@class='style-scope ytd-popup-container']"));
        
        this.get = function (url) {
            browser.get(url);
        };
        this.click_on_wathch_later_button = function(){
            this.first_video_watch_later.click()
        };
        this.click_on_watch_leter_section = function(){
            this.watch_leter_section_button.click();
        };
        this.click_to_play_first_element = function(){
            this.first_element.click()
        };
        this.click_on_logo_button = function(){
            this.logo_button.click();
        };
        this.click_on_history_section = function(){
            this.history_section_button.click()
        };
        this.click_to_play_second_element = function(){
            this.second_element.click()
        };
        this.avatarImg_click = function(){
            this.avatarImg.click()
        };
        this.click_sign_out_button = function(){
            this.sign_out_button.click()
        }
        


    }      
}

module.exports = new homepage();