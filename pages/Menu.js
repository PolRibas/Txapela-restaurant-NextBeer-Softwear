`use strict`;

function MenuPage(parentElement) {
    this.parentElement = parentElement;
    this.elements = null;
    this.listCards = [];
}

MenuPage.prototype.generate = async function() {
    this.loading = new Loading(this.parentElement)
    this.loading.generate();
    this.listCards[0] = new ListCard('Beers');
    this.listCards[1] = new ListCard('Tapas');
    this.loading = new Loading(this.parentElement)
    this.loading.generate();
    this.elements = await this.listCards[0].GenerateBeerCard();
    this.elements += this.listCards[1].GenerateTapasCard();
    this.render();
}

MenuPage.prototype.render = function() {
    this.parentElement.innerHTML = this.elements;
}