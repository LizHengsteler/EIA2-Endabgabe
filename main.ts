namespace Firework {

window.addEventListener("load", handleLoad);

//let imageData: ImageData;
export let crc2: CanvasRenderingContext2D;
export let emitters: Emitter[] =[];
let auswahl: number = 1;
export enum TASK {
      WAIT,
      CATCH
  }
let img: any;
function handleLoad(_event: Event): void {
      let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      img = document.getElementById("bg");

      if (!canvas) return;
      crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        
      canvas.addEventListener("click", (event) => {
        const mouseX: number = event.clientX;
        const mouseY: number = event.clientY;
        createBoom(mouseX, mouseY, auswahl);
      });

 
   
     
      
      createBoom(0, 0, 0);
      //Cloud.addEventListener("mousedown", moveCloud);
      window.setInterval(update, 50);
      
    }
function update(): void {
       
        crc2.beginPath();
        crc2.globalAlpha = 0.2;
        crc2.drawImage(img, 0, 0, window.innerWidth, window.innerHeight);
        crc2.closePath();
        for (let i: number = 0; i < emitters.length; i++) {
        
            emitters[i].life();
           
        }
        
     
        
      }

function createBoom(mouseX: number, mouseY: number, auswahl: number): void {

        if (auswahl == 0) {
            let emitter: Emitter = new Emitter(mouseX, mouseY,"rgb(255,255,0", 2, "kreis");
            emitters.push(emitter);
        }
     
        if (auswahl == 1) {
            let emitter: Emitter = new Emitter(mouseX, mouseY, "rgb(0,255,0", 5, "stern");
            emitters.push(emitter);
        }
        if (auswahl == 2) {
            let emitter: Emitter = new Emitter(mouseX, mouseY, "rgb(255,0,255", 5, "kreis");
            emitters.push(emitter);
        }
      }
    }