`use strict`;

function Layout(root, style) {
    this.root = root;
    this.style = style;
    this.element = null;
    this.header = null;
    this.main = null;
    this.footer = null;
}

Layout.prototype.generate = function() {
    this.element = `
    <header id="site-header"></header>
    <main id="site-main"></main>
    <footer id="site-footer"></footer>`;
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
}