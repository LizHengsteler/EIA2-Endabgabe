"use strict";
var Firework;
(function (Firework) {
    /*Aufgabe: Endabgabe
     Name: Liz Hengsteler
     Matrikel: 268386
     Datum: 12.02.2023
     Zusammenarbeit: Kristoffer Müller und Theo Züffle
     Quellen: Inverted Classroom, Jirka Videos + Code
     W3Schools
     Stackoverflow
     ChatGPT
     */
    window.addEventListener("load", handleLoad);
    Firework.emitters = [];
    let img;
    // let daten1String: string[];
    // let daten2String: string[];
    let selection = 0;
    let TASK;
    (function (TASK) {
        TASK[TASK["WAIT"] = 0] = "WAIT";
        TASK[TASK["CATCH"] = 1] = "CATCH";
    })(TASK = Firework.TASK || (Firework.TASK = {}));
    let responsedata;
    let responseArray;
    async function send(_query) {
        let response = await fetch(_query);
        let data = await response.text();
        console.log(data);
        responsedata = JSON.parse(data);
        responseArray = responsedata.data;
        console.log(responseArray['0'].radius);
        for (let i = responseArray.length - 1; i > responseArray.length - 5; i--) {
            console.log(responseArray['' + i].radius);
            let selectionDiv = document.getElementsByClassName("rockets")[responseArray.length - i - 1];
            selectionDiv.setAttribute("id", "" + i);
            selectionDiv.addEventListener("click", changeselection);
        }
        return true;
    }
    // show MingiDB's response in the textarea
    function changeselection(e) {
        selection = Number(e.target.id);
    }
    function handleLoad(_event) {
        send("https://webuser.hs-furtwangen.de/~hengstel/Database/?command=find&collection=Feuerwerk");
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
            createBoom(mouseX, mouseY, selection);
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
    function createBoom(mouseX, mouseY, selection) {
        console.log(responseArray['' + selection].radius);
        let emitter = new Firework.Emitter(mouseX, mouseY, responseArray['' + selection].color, responseArray['' + selection].radius, responseArray['' + selection].shape);
        Firework.emitters.push(emitter);
    }
})(Firework || (Firework = {}));
//# sourceMappingURL=main.js.map