"use strict";
var Firework;
(function (Firework) {
    window.addEventListener("load", handleLoad);
    Firework.emitters = [];
    let auswahl = 1;
    let TASK;
    (function (TASK) {
        TASK[TASK["WAIT"] = 0] = "WAIT";
        TASK[TASK["CATCH"] = 1] = "CATCH";
    })(TASK = Firework.TASK || (Firework.TASK = {}));
    let img;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        img = document.getElementById("bg");
        if (!canvas)
            return;
        Firework.crc2 = canvas.getContext("2d");
        canvas.addEventListener("click", (event) => {
            const mouseX = event.clientX;
            const mouseY = event.clientY;
            createBoom(mouseX, mouseY, auswahl);
        });
        createBoom(0, 0, 0);
        //Cloud.addEventListener("mousedown", moveCloud);
        window.setInterval(update, 50);
    }
    function update() {
        Firework.crc2.beginPath();
        Firework.crc2.globalAlpha = 0.2;
        Firework.crc2.drawImage(img, 0, 0, window.innerWidth, window.innerHeight);
        Firework.crc2.closePath();
        for (let i = 0; i < Firework.emitters.length; i++) {
            Firework.emitters[i].life();
        }
    }
    function createBoom(mouseX, mouseY, auswahl) {
        if (auswahl == 0) {
            let emitter = new Firework.Emitter(mouseX, mouseY, "rgb(255,255,0", 2, "kreis");
            Firework.emitters.push(emitter);
        }
        if (auswahl == 1) {
            let emitter = new Firework.Emitter(mouseX, mouseY, "rgb(0,255,0", 5, "stern");
            Firework.emitters.push(emitter);
        }
        if (auswahl == 2) {
            let emitter = new Firework.Emitter(mouseX, mouseY, "rgb(255,0,255", 5, "kreis");
            Firework.emitters.push(emitter);
        }
    }
})(Firework || (Firework = {}));
//# sourceMappingURL=main.js.map