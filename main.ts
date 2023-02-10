namespace Firework {

    window.addEventListener("load", handleLoad);

    //let imageData: ImageData;
    export let crc2: CanvasRenderingContext2D;
    export let emitters: Emitter[] = [];
    let daten1String: string[];
    let daten2String: string[];
    
    let auswahl: number = 0;
    export enum TASK {
        WAIT,
        CATCH
    }
   
    interface Feuerwerk {
            [key: string]: string
            
    }
    interface Sammlung {
        feuerwerksdaten: Feuerwerk;
    }
    let responsedata: any[];
    let responseArray: Sammlung[];
    
    async function send(_query: string): Promise<boolean> {
       
       
    
        let response: Response = await fetch(_query);
        let daten: string = await response.text();
        console.log(daten);
    
        responsedata = <Feuerwerk[]>JSON.parse(daten);
        responseArray = <Feuerwerk[]>responsedata.data;
        console.log(responseArray['0'].radius);
for(let i:number = responseArray.length-1; i>responseArray.length-5;i--){

    console.log(responseArray[''+i].radius);
       let auswahlDiv:any = document.getElementsByClassName("raketen")[responseArray.length-i-1];
       auswahlDiv.setAttribute("id",""+i);
       auswahlDiv.addEventListener("click", changeauswahl);
}
       
        return true;
      }
    
      // show MingiDB's response in the textarea
     



    let img: any ;

function changeauswahl(e:Event):void{
    auswahl= Number(e.target.id);
}

    function handleLoad(_event: Event): void {
        send("https://webuser.hs-furtwangen.de/~zuefflet/Database/?command=find&collection=Feuerwerk");
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

           
                console.log(responseArray[''+auswahl].radius);
                let emitter:Emitter = new Emitter(mouseX, mouseY,responseArray[''+auswahl].color,responseArray[''+auswahl].radius ,responseArray[''+auswahl].form);
                emitters.push(emitter);
            
        
        
        }
 }