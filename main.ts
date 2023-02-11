namespace Firework {
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

    //let imageData: ImageData;
    export let crc2: CanvasRenderingContext2D;
    export let emitters: Emitter[] = [];
    let img: any ;
   // let daten1String: string[];
   // let daten2String: string[];
    
    let selection: number = 0;
    export enum TASK {
        WAIT,
        CATCH
    }
   
    interface Firework {
            [key: string]: string;
            
    }
    interface Sammlung {
        feuerwerksdaten: Firework;
    }
    let responsedata: any[];
    let responseArray: Sammlung[];
    
    async function send(_query: string): Promise<boolean> {
       
       
    
        let response: Response = await fetch(_query);
        let data: string = await response.text();
        console.log(data);
    
        responsedata = <Firework[]>JSON.parse(data);
        responseArray = <Firework[]>responsedata.data;
        console.log(responseArray[ '0' ].radius);
        for (let i: number = responseArray.length - 1; i > responseArray.length - 5; i --) {

    console.log(responseArray[''+i].radius);
    let selectionDiv: any = document.getElementsByClassName("rockets")[responseArray.length - i - 1];
    selectionDiv.setAttribute("id",""+i);
    selectionDiv.addEventListener("click", changeselection);
}
       
        return true;
      }
    
      // show MingiDB's response in the textarea
     



    

    function changeselection(e: Event): void {
    selection = Number(e.target.id);
}

    function handleLoad(_event: Event): void {
        send("https://webuser.hs-furtwangen.de/~hengstel/Database/?command=find&collection=Feuerwerk");
        let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        img = document.getElementById("bg");

        if (!canvas) return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
            
        canvas.addEventListener("click", (event) => {
            const mouseX: number = event.clientX;
            const mouseY: number = event.clientY;
            createBoom(mouseX, mouseY, selection);
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

    function createBoom(mouseX: number, mouseY: number, selection: number): void {

           
                console.log(responseArray[''+selection].radius);
                let emitter: Emitter = new Emitter(mouseX, mouseY, responseArray[''+selection].color, responseArray[''+selection].radius , responseArray[''+selection].shape);
                emitters.push(emitter);
            
        
        
        }
 }