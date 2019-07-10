`use strict`;

function Navbar(parent, links, style) {
    this.parentElement = parent;
    this.links = links;
    this.style = style;
    this.elements = null;
}

Navbar.prototype.generate = function() {
    this.elements = `<nav><ul>`;
    var i = 0;
    this.links.forEach((link) => {
        i++;
        this.elements += `<li class="nav"><a href="#0" url=${link.url}>${link.name}</a></li>`;
    })
    this.elements += `</ul></nav>`;
    this.render();
}

Navbar.prototype.render = function() {
    this.parentElement.innerHTML = this.elements;
}