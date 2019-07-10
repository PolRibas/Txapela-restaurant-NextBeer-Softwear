`use strict`;

function Card(title) {
    this.title = title;
    this.doc = null;
}

Card.prototype.GeneraTapaAlcachofas = function() {
    this.doc = `<section class="regular-card"><h3>${this.title}</h3><p>Comming from south Spain and created by our personal artist</p>`;
    this.doc += `<img src="./images/tapas/alcachofas.jpg" alt="alcachofas">`;
    this.doc += `</section>`
    return this.doc;
}

Card.prototype.GeneraTapaTxarlota = function() {
    this.doc = `<section class="regular-card"><h3>${this.title}</h3><p>Typical Basque skewer, with our select beef from Guipuzcoan</p>`;
    this.doc += `<img src="./images/tapas/txarlota.jpg" alt="alcachofas">`;
    this.doc += `</section>`
    return this.doc;
}

//spectacular tuna that has been caught in our beautiful Cantabrian Sea, 100% fresh.

Card.prototype.GeneraTapaTuna = function() {
    this.doc = `<section class="regular-card"><h3>${this.title}</h3><p>Spectacular tuna that has been caught in our beautiful Cantabrian Sea, 100% fresh</p>`;
    this.doc += `<img src="./images/tapas/bonito.jpg" alt="alcachofas">`;
    this.doc += `</section>`
    return this.doc;
}

//Sardine accompanied by a small fry own brand of our chef, our signature dish

Card.prototype.GeneraTapaSardine = function() {
    this.doc = `<section class="regular-card"><h3>${this.title}</h3><p>Spectacular tuna that has been caught in our beautiful Cantabrian Sea, 100% fresh</p>`;
    this.doc += `<img src="./images/tapas/sardina.jpg" alt="alcachofas">`;
    this.doc += `</section>`
    return this.doc;
}