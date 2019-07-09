`use strict`;

function NextBeerPage(parentElement) {
    this.parentElement = parentElement;
    this.elements = null;
    this.beers = null;
    this.loading = null;
    this.selectBeer = null;
}

NextBeerPage.prototype.generate = async function() {
    //this.loading = new Loading(this.parentElement)
    //this.loading.generate();
    var random = Math.floor(Math.random() * 24);
    await this.connectToAPI();
    this.selectBeer = this.beers[random];
    console.log(this.selectBeer)
    this.elements = `
    <header>
        <h2>${this.selectBeer.name}</h2>
        <p>${this.selectBeer.description}</p>`;
    if (this.selectBeer.method.twist !== null) {
        this.elements += `<p>${this.selectBeer.method.twist}</p>`;
    }
    if (this.selectBeer.method.twist !== null) {
        this.elements += `<p>${this.selectBeer.brewers_tips}</p>`;
    }
    this.elements += `</header><footer>
    <h2>Select your free stuff</h2>
    <select>
    <option>${this.selectBeer.food_pairing[0]}</option>
    <option>${this.selectBeer.food_pairing[1]}</option>
    <option>${this.selectBeer.food_pairing[2]}</option></select>
    <button>ORDER NOW</button></footer>
    <aside>
    <img src="${this.selectBeer.image_url}" alt="${this.selectBeer.name}">
    </aside>`;
    var button = document.querySelector('button');
    document.addEventListener('click', this.buttonCheck)
    this.render();
}

NextBeerPage.prototype.render = function() {
    this.parentElement.innerHTML = this.elements;
}

NextBeerPage.prototype.connectToAPI = async function() {
    this.beers = await PunkBeerServiceInstance.getAllBeers();
}

NextBeerPage.prototype.buttonCheck = function(parentElement) {
    router.buildDom('/menu', parentElement);
}