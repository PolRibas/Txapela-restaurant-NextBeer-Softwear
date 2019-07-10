`use strict`;

function Layout(root, style) {
    this.root = root;
    this.style = style;
    this.element = null;
    this.header = null;
    this.main = null;
    this.footer = null;
    this.burgerMenu = null;
}

Layout.prototype.generate = function() {
    this.element = `
    <section id="site-logo"><img src="./images/Logo.png" alt="Logo Restaurant"></section>
    <header id="site-header"></header>
    <section id='site-burger-menu'></section>
    <main id="site-main"></main>
    <footer id="site-footer">
    <img src="./images/maps.png" alt="Logo Restaurant">
    <p><small>© 2019 GRIZZLY for Mozcorra Txapela</small></p>
    </footer>`;
    this.render();
    this.getContainers();
}

Layout.prototype.render = function() {
    this.root.innerHTML = this.element;
}

Layout.prototype.getContainers = function() {
    this.header = document.querySelector('#site-header');
    this.main = document.querySelector('#site-main');
    this.footer = document.querySelector('#site-footer')
    this.burgerMenu = document.querySelector('#site-burger-menu')
}