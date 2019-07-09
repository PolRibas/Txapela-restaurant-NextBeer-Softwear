`use strict`;

function ListCard(title) {
    this.title = title;
    this.element = {};
    this.data = null;
    this.doc = null;
}

ListCard.prototype.GenerateBeerCard = async function() {
    this.data = await PunkBeerServiceInstance.getAllBeers();
    console.log(this.data)
    for (var i = 0; i < 24; i++) {
        this.element[i] = { name: this.data[i].name, prise: this.data[i].attenuation_level / 12 };
    }
    this.doc = `<section>
        <h3>${this.title}</h3><ul>`;
    for (var i = 0; i < 24; i++) {
        this.doc += `<li>${this.element[i].name}</li><li>${Math.floor(this.element[i].prise)}</li>`;
    }
    this.doc += `</ul></section>`

    return this.doc;
}