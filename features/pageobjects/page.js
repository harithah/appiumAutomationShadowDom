class Page {

    open() {
        return browser.url('https://shop.polymer-project.org/')
    }

    getShadowDom() {
        return browser.$("body shop-app").shadow$("#header");
    }


}
module.exports = new Page();
