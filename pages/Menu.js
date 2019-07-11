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
    this.listCards[2] = new ListCard('Wines');
    this.listCards[3] = new Card('Artichokes');
    this.listCards[4] = new Card('Txarlota');
    this.listCards[5] = new Card('Tuna Fish');
    this.listCards[6] = new Card('Sardine');
    this.loading = new Loading(this.parentElement)
    this.elements = await this.listCards[0].GenerateBeerCard();
    this.elements += this.listCards[1].GenerateTapasCard();
    this.elements += this.listCards[2].GenerateWinsCard();
    this.elements += this.listCards[3].GeneraTapaAlcachofas();
    this.elements += this.listCards[4].GeneraTapaTxarlota();
    this.elements += this.listCards[5].GeneraTapaTuna();
    this.elements += this.listCards[6].GeneraTapaSardine();
    this.render();
}

MenuPage.prototype.render = function() {
    this.parentElement.innerHTML = `<section class="grid-container">${this.elements}</section>`;
}