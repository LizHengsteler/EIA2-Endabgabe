"use strict";
var Firework;
(function (Firework) {
    window.addEventListener("load", handleLoad);
    Firework.emitters = [];
    let daten1String;
    let daten2String;
    let auswahl = 0;
    let TASK;
    (function (TASK) {
        TASK[TASK["WAIT"] = 0] = "WAIT";
        TASK[TASK["CATCH"] = 1] = "CATCH";
    })(TASK = Firework.TASK || (Firework.TASK = {}));
    let responsedata;
    let responseArray;
    async function send(_query) {
        let response = await fetch(_query);
        let daten = await response.text();
        console.log(daten);
        responsedata = JSON.parse(daten);
        responseArray = responsedata.data;
        console.log(responseArray['0'].radius);
        for (let i = responseArray.length - 1; i > responseArray.length - 5; i--) {
            console.log(responseArray['' + i].radius);
            let auswahlDiv = document.getElementsByClassName("raketen")[responseArray.length - i - 1];
            auswahlDiv.setAttribute("id", "" + i);
            auswahlDiv.addEventListener("click", changeauswahl);
        }
        return true;
    }
    // show MingiDB's response in the textarea
    let img;
    function changeauswahl(e) {
        auswahl = Number(e.target.id);
    }
    function handleLoad(_event) {
        send("https://webuser.hs-furtwangen.de/~zuefflet/Database/?command=find&collection=Feuerwerk");
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
        console.log(responseArray['' + auswahl].radius);
        let emitter = new Firework.Emitter(mouseX, mouseY, responseArray['' + auswahl].color, responseArray['' + auswahl].radius, responseArray['' + auswahl].form);
        Firework.emitters.push(emitter);
    }
})(Firework || (Firework = {}));
//# sourceMappingURL=main.js.map