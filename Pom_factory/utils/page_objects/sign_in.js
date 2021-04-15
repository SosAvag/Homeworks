class SignIn {
    constructor() {
    
    this.sign_in_button = element(by.css("#text.size-small"));
    this.userName_input_field = element(by.xpath("//input[@id='identifierId']"));
    this.password_input_field = element(by.xpath("//input[@name='password']"));
    this.next_button_login = element(by.id("identifierNext"));
    this.next_button_password = element(by.id("passwordNext"));
       
    this.click_on_sign_in = function(){
        this.sign_in_button.click();
    }; 
    this.enter_userName = function(user) {
        this.userName_input_field.sendKeys(user)
    };
    this.enter_password = function(password) {
       this. password_input_field.sendKeys(password)
    };
    this.click_next_login = function(){
        this.next_button_login.click()
    }
    this.click_next_password = function(){
       this.next_button_password.click()
    }
   
}
}
    module.exports = SignIn;