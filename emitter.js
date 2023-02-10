"use strict";
var Firework;
(function (Firework) {
    class Emitter {
        constructor(_mouseX, _mouseY, _color, _radius, _form) {
            this.lifespan = Math.random() * 2 + 7;
            this.turbulensX = [];
            this.turbulensY = [];
            this.forceX = [];
            this.forceY = [];
            this.random = 5;
            this.particleMax = 40;
            this.mouseX = _mouseX;
            this.mouseY = _mouseY;
            this.radius = _radius;
            this.color = _color;
            this.form = _form;
            this.randomEffekt();
        }
        life() {
            if (this.lifespan > 0) {
                this.radius2 = this.radius;
                this.radius2 *= this.lifespan;
                this.lifespan -= 0.3;
                this.draw();
                this.forceEffekt();
            }
        }
        randomEffekt() {
            for (let i = 0; i < this.particleMax; i++) {
                this.forceX.push(this.lifespan / 6);
                this.forceY.push(this.lifespan / 6);
                this.forceX[i] += (Math.random()) * this.random * (this.lifespan / 6);
                this.forceY[i] += (Math.random()) * this.random * (this.lifespan / 6);
                this.turbulensX.push(this.forceX[i]);
                this.turbulensY.push(this.forceY[i]);
            }
        }
        forceEffekt() {
            for (let i = 0; i < this.particleMax; i++) {
                this.turbulensX[i] += this.forceX[i];
                this.turbulensY[i] += this.forceY[i];
            }
        }
        drawStar(x, y, radius) {
            Firework.crc2.beginPath();
            for (let i = 0; i < 5; i++) {
                const xCoordinate = x + radius * Math.cos(((18 + i * 72) / 180) * Math.PI);
                const yCoordinate = y + radius * Math.sin(((18 + i * 72) / 180) * Math.PI);
                Firework.crc2.lineTo(xCoordinate, yCoordinate);
            }
            Firework.crc2.closePath();
            Firework.crc2.fill();
        }
        draw() {
            for (let i = 0; i < this.particleMax; i += 4) {
                if (this.form == "kreis") {
                    Firework.crc2.beginPath();
                    Firework.crc2.fillStyle = this.color;
                    Firework.crc2.arc(this.mouseX + this.turbulensX[i + 0], this.mouseY + this.turbulensY[0 + i], this.radius2, 0, Math.PI * 2);
                    Firework.crc2.fill();
                    Firework.crc2.closePath();
                    Firework.crc2.beginPath();
                    Firework.crc2.fillStyle = this.color;
                    Firework.crc2.arc(this.mouseX - this.turbulensX[i + 1], this.mouseY + this.turbulensY[1 + i], this.radius2, 0, Math.PI * 2);
                    Firework.crc2.fill();
                    Firework.crc2.closePath();
                    Firework.crc2.beginPath();
                    Firework.crc2.fillStyle = this.color;
                    Firework.crc2.arc(this.mouseX + this.turbulensX[i + 2], this.mouseY - this.turbulensY[2 + i], this.radius2, 0, Math.PI * 2);
                    Firework.crc2.fill();
                    Firework.crc2.closePath();
                    Firework.crc2.beginPath();
                    Firework.crc2.fillStyle = this.color;
                    Firework.crc2.arc(this.mouseX - this.turbulensX[i + 3], this.mouseY - this.turbulensY[3 + i], this.radius2, 0, Math.PI * 2);
                    Firework.crc2.fill();
                    Firework.crc2.closePath();
                }
                if (this.form == "rect") {
                    Firework.crc2.beginPath();
                    Firework.crc2.fillStyle = this.color;
                    console.log(this.color);
                    Firework.crc2.fillRect(this.mouseX + this.turbulensX[i + 0], this.mouseY + this.turbulensY[0 + i], this.radius2, this.radius2);
                    Firework.crc2.closePath();
                    Firework.crc2.fillStyle = "white";
                    Firework.crc2.beginPath;
                    Firework.crc2.fillStyle = this.color;
                    Firework.crc2.fillRect(this.mouseX - this.turbulensX[i + 1], this.mouseY + this.turbulensY[1 + i], this.radius2, this.radius2);
                    Firework.crc2.closePath();
                    Firework.crc2.beginPath;
                    Firework.crc2.fillStyle = this.color;
                    Firework.crc2.fillRect(this.mouseX + this.turbulensX[i + 2], this.mouseY - this.turbulensY[2 + i], this.radius2, this.radius2);
                    Firework.crc2.fill();
                    Firework.crc2.closePath();
                    Firework.crc2.beginPath;
                    Firework.crc2.fillStyle = this.color;
                    Firework.crc2.fillRect(this.mouseX - this.turbulensX[i + 3], this.mouseY - this.turbulensY[3 + i], this.radius2, this.radius2);
                    Firework.crc2.fill();
                    Firework.crc2.closePath();
                }
                if (this.form == "stern") {
                    Firework.crc2.fillStyle = this.color;
                    this.drawStar(this.mouseX + this.turbulensX[i + 0], this.mouseY + this.turbulensY[0 + i], this.radius2);
                    this.drawStar(this.mouseX - this.turbulensX[i + 0], this.mouseY + this.turbulensY[0 + i], this.radius2);
                    this.drawStar(this.mouseX + this.turbulensX[i + 0], this.mouseY - this.turbulensY[0 + i], this.radius2);
                    this.drawStar(this.mouseX - this.turbulensX[i + 0], this.mouseY - this.turbulensY[0 + i], this.radius2);
                }
            }
        }
    }
    Firework.Emitter = Emitter;
})(Firework || (Firework = {}));
//# sourceMappingURL=emitter.js.map