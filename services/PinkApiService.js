`use strict`;

function PunkBeerService() {
    this.baseUrl = 'https://api.punkapi.com/v2/beers';
    this.cors = 'https://cors-anywhere.herokuapp.com/';
}

PunkBeerService.prototype.getAllBeers = async function() {
    var response = await fetch(this.cors + this.baseUrl);
    var data = await response.json();
    return data;
}

var PunkBeerServiceInstance = new PunkBeerService();