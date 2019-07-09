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
    this.doc = `<section>
        <h3>${this.title}</h3><ul>`;
    for (var i = 0; i < 24; i++) {
        this.doc += `<li>${this.element[i].name}</li><li>${Math.floor(this.element[i].prise)} €</li>`;
    }
    this.doc += `</ul></section>`

    return this.doc;
}

ListCard.prototype.GenerateTapasCard = function() {
    this.element = [{ name: 'Tortilla de patatas', prise: 7 }, { name: 'Croquetas de Jamon', prise: 6 }, { name: 'Chipirones', prise: 10 }, { name: 'Pulpo a la gallega', prise: 12 }, { name: 'Calamares a la romana', prise: 9 }, { name: 'Aceitunas rellenas', prise: 4 }, { name: 'Mini Bravitas', prise: 6 }];
    this.doc = `<section>
        <h3>${this.title}</h3><ul>`;
    for (var i = 0; i <= 6; i++) {
        this.doc += `<li>${this.element[i].name}</li><li>${Math.floor(this.element[i].prise)} €</li>`;
    }
    this.doc += `</ul></section>`

    return this.doc;
}