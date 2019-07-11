`use strict`;

function NextBeerPage(parentElement) {
    this.parentElement = parentElement;
    this.elements = null;
    this.beers = null;
    this.loading = null;
    this.selectBeer = null;
}

NextBeerPage.prototype.generate = async function() {
    this.loading = new Loading(this.parentElement)
    this.loading.generate();
    var random = Math.floor(Math.random() * 24);
    await this.connectToAPI();
    this.selectBeer = this.beers[random];
    this.elements = `
    <section class="flex-box"><section class="select-beer-container"><header>
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
    </section>
    <aside>
    <img src="${this.selectBeer.image_url}" alt="${this.selectBeer.name}">
    </aside></section>`;
    this.render();
    var button = document.querySelector('button');
    var self = this;
    button.addEventListener('click', () => {
        this.buttonCheck(self, this.selectBeer.image_url, this.selectBeer.name);
    });
}

NextBeerPage.prototype.buttonCheck = function(self, url, name) {
    self.elements = `
    <section class="wait-beer">
        <h2>Wait for your beer</h2>
        <div class="loader"> <img src="./images/bottleCharge.png" alt"mini logo"></div>
        <img id="botella" src="${url}" alt="${name}">
        </section>`;
    self.parentElement.innerHTML = self.elements;
    setTimeout(function() {
        self.elements = null;
        self.generate();
    }, 20000);
}

NextBeerPage.prototype.render = function() {
    this.parentElement.innerHTML = this.elements;
}

NextBeerPage.prototype.connectToAPI = async function() {
    this.beers = await PunkBeerServiceInstance.getAllBeers();
}