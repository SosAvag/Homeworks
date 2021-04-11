let sign_in = function() {
    
    let sign_in_button = element(by.css("#text.size-small"));
    let userName_input_field = element(by.xpath("//input[@id='identifierId']"));
    let password_input_field = element(by.xpath("//input[@name='password']"));
    let next_button_login = element(by.id("identifierNext"));
    let next_button_password = element(by.id("passwordNext"));
    // let password = 'Armenia$159';
    
    this.click_on_sign_in = function(){
        sign_in_button.click();
    }; 
    this.enter_userName = function(user) {
        userName_input_field.sendKeys(user)
    };
    this.enter_password = function(password) {
        password_input_field.sendKeys(password)
    };
    this.click_next_login = function(){
        next_button_login.click()
    }
    this.click_next_password = function(){
        next_button_password.click()
    }
    }

module.exports = new sign_in();