`use strict`;

function BurgerMenu(parentElement, siteMenu) {
    this.parentElement = parentElement;
    this.elements = null;
    this.listCards = [];
    this.siteMenu = siteMenu;
}

BurgerMenu.prototype.generate = function() {
    this.elements = `
    <section class="burger-img"><div></div><div></div><div></div></section>
    <section class="burger-info display-none">
    <ul>
    <li><a href="#0" url=/menu>Menu</a></li>
    <li><a href="#0" url=/nextbeer>Next Beer</a></li></ul>
    
    <footer><img src="./images/Logo-blanco.png" alt="White Logo">
    <p><small>© 2019 GRIZZLY for Mozcorra Txapela</small></p></footer>
    </section>
    `;
    this.render();
    var divs = document.querySelector('.burger-img');
    var self = this;
    divs.addEventListener('click', () => {
        this.toggleBM(self);
    })

}

BurgerMenu.prototype.changePage = function(selfAnchor) {
    var main = document.querySelector('#site-main');
    var header = document.querySelector('#site-header');
    var footer = document.querySelector('#site-footer');
    var logo = document.querySelector('#site-logo');
    var info = document.querySelector('.burger-info');
    info.classList.add("display-none");
    // main.classList.remove("move");
    // header.classList.remove("move");
    // footer.classList.remove("move");
    // logo.classList.remove("move");
    selfAnchor.elements = null;
    var url = event.target.attributes.url.value;
    router.buildDom(url, selfAnchor.siteMenu);
}

BurgerMenu.prototype.toggleBM = function(self) {
    var main = document.querySelector('#site-main');
    var header = document.querySelector('#site-header');
    var footer = document.querySelector('#site-footer');
    var logo = document.querySelector('#site-logo');
    var info = document.querySelector('.burger-info');
    // setTimeout(() => {
    //     main.classList.add("move");
    //     header.classList.add("move");
    //     footer.classList.add("move");
    //     logo.classList.add("move");
    // }, 245);
    info.classList.remove("display-none");
    var anchors = document.querySelectorAll('a');
    var selfAnchor = self;
    anchors.forEach((anchor) => {
        anchor.addEventListener('click', () => {
            self.changePage(selfAnchor)
        });
    })
}

BurgerMenu.prototype.render = function() {
    this.parentElement.innerHTML = this.elements;
}