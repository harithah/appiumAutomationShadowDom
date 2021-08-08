class Page {

    open() {
        browser.url('https://shop.polymer-project.org/')
        let contexts = driver.getContexts();
        console.log("context==>" + contexts);
        driver.switchContext(contexts[1]);
    }

    getShadowDom() {
        return browser.$("body shop-app").shadow$("#header");
    }


}
module.exports = new Page();
