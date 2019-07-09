`use strict`;

function Router() {
    this.page = null;
}

Router.prototype.buildDom = function(url, parentElement) {
    switch (url) {
        case '/':
            this.generateLandingPage(parentElement);
            break;
        case '/menu':
            this.generateMenuPage(parentElement);
            break;
        case '/nextbeer':
            this.generateNextBeerpage(parentElement);
            break;
        default:
            this.generateMenuPage(parentElement);
            break;
    }
}

Router.prototype.generateLandingPage = function(parentElement) {
    this.page = new LadingPage(parentElement);
    this.page.generate();
}

Router.prototype.generateNextBeerpage = function(parentElement) {
    this.page = new NextBeerPage(parentElement);
    this.page.generate();
}

Router.prototype.generateMenuPage = function(parentElement) {
    this.page = new MenuPage(parentElement)
    this.page.generate();
}

var router = new Router();