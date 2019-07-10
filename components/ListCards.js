`use strict`;

function ListCard(title) {
    this.title = title;
    this.element = {};
    this.data = null;
    this.doc = null;
}

ListCard.prototype.GenerateBeerCard = async function() {
    this.data = await PunkBeerServiceInstance.getAllBeers();
    for (var i = 0; i < 24; i++) {
        this.element[i] = { name: this.data[i].name, prise: this.data[i].attenuation_level / 12 };
    }
    this.doc = `<section class="list-card">
        <h3>${this.title}</h3>`;
    for (var i = 0; i < 24; i++) {
        this.doc += `<ul><li>${this.element[i].name}</li><li>${Math.floor(this.element[i].prise)} €</li></ul>`;
    }
    this.doc += `</section>`

    return this.doc;
}

ListCard.prototype.GenerateTapasCard = function() {
    this.element = [{ name: 'Tortilla de patatas', prise: 7 }, { name: 'Croquetas de Jamon', prise: 6 }, { name: 'Chipirones', prise: 10 }, { name: 'Pulpo a la gallega', prise: 12 }, { name: 'Calamares a la romana', prise: 9 }, { name: 'Aceitunas rellenas', prise: 4 }, { name: 'Mini Bravitas', prise: 6 }];
    this.doc = `<section class="list-card">
        <h3>${this.title}</h3>`;
    for (var i = 0; i <= 6; i++) {
        this.doc += `<ul><li>${this.element[i].name}</li><li>${Math.floor(this.element[i].prise)} €</li></ul>`;
    }
    this.doc += `</section>`

    return this.doc;
}

ListCard.prototype.GenerateWinsCard = function() {
    this.element = [{ name: 'Perro Verde', prise: 12 }, { name: 'Mar de Frades', prise: 21 }, { name: 'Blanc Pescader', prise: 10 }, { name: 'Pingus', prise: 120 }, { name: '200 Monges', prise: 9 }, { name: 'Cosme Palacio', prise: 4 }, { name: 'Teso la Monja', prise: 6 }];
    this.doc = `<section class="list-card">
        <h3>${this.title}</h3>`;
    for (var i = 0; i <= 6; i++) {
        this.doc += `<ul><li>${this.element[i].name}</li><li>${Math.floor(this.element[i].prise)} €</li></ul>`;
    }
    this.doc += `</section>`

    return this.doc;
}