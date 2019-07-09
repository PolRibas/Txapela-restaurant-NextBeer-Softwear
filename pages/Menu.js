`use strict`;

function MenuPage(parentElement) {
    this.parentElement = parentElement;
    this.elements = null;
    this.listCards = [];
}

MenuPage.prototype.generate = async function() {
    this.listCards[0] = new ListCard('Beers')
    this.elements = `
    <header>
        <h1>There will be my menu</h1>
    </header>`;
    this.elements += await this.listCards[0].GenerateBeerCard();
    this.render();
}

MenuPage.prototype.render = function() {
    this.parentElement.innerHTML = this.elements;
}