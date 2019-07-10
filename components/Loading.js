`use strict`;

function Loading(parentElement) {
    this.parentElement = parentElement;
    this.elements = null;
}

Loading.prototype.generate = function() {
    var birra = [];
    this.elements = `<section class="canvas-site"><h2>Wait for your Beer</h2><canvas></canvas></section>`;
    birraUno = new Image();
    birraUno.src = `./images/Charge/1.png`;
    birraDos = new Image();
    birraDos.src = `./images/Charge/2.png`;
    birraTres = new Image();
    birraTres.src = `./images/Charge/3.png`;
    birraCuatro = new Image();
    birraCuatro.src = `./images/Charge/4.png`;
    birraCinco = new Image();
    birraCinco.src = `./images/Charge/5.png`;
    birraSeis = new Image();
    birraSeis.src = `./images/Charge/6.png`;
    this.render();
    var canvas = document.querySelector('canvas');
    var ctx = canvas.getContext('2d');
    var i = 0;
    var medioCanvas = canvas.width / 2 - ((canvas.height * 276 / 508 / 2));
    var loop = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (i < 20) {
            ctx.drawImage(birraUno, medioCanvas, 0, (canvas.height * 276 / 508), canvas.height);
        } else if (i < 40) {
            ctx.drawImage(birraDos, medioCanvas, 0, (canvas.height * 276 / 508), canvas.height);
        } else if (i < 60) {
            ctx.drawImage(birraTres, medioCanvas, 0, (canvas.height * 276 / 508), canvas.height);
        } else if (i < 80) {
            ctx.drawImage(birraCuatro, medioCanvas, 0, (canvas.height * 276 / 508), canvas.height);
        } else if (i < 100) {
            ctx.drawImage(birraCinco, medioCanvas, 0, (canvas.height * 276 / 508), canvas.height);
        } else {
            ctx.drawImage(birraSeis, medioCanvas, 0, (canvas.height * 276 / 508), canvas.height);
        }
        if (i <= 120) {
            requestAnimationFrame(loop);
        }
        i++;
    }
    loop();
}

Loading.prototype.render = function() {
    this.parentElement.innerHTML = this.elements;
}