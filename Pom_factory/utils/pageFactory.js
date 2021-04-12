const Homepage = require("./page_objects/homepage");
const Settings = require("./page_objects/settings");
const SignIn = require("./page_objects/sign_in");
const sign_in = require("./page_objects/sign_in");

class PageFactory {
    static getPage(pageName) {
        switch (pageName) {
            case "home":
                return new Homepage();
            case "settings":
                return new Settings();
            case "sign_in":
                return new SignIn();        
        };
    };
};

module.exports = PageFactory;