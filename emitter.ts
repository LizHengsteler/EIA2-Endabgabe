namespace Firework {
export  class Emitter  {
     mouseX:number;
     mouseY:number;
     lifespan:number = Math.random()*2+7;
     color:string;
     radius:number;
     form:string;
     turbulensX:number[] = [];
     turbulensY:number[] = [];
     forceX:number[] = [];
     forceY:number[] = [];
     random:number = 5;
    radius2:number;
     particleMax:number=40;
    constructor(_mouseX:number, _mouseY:number,_color:string,_radius:number, _form:string) {
    this.mouseX = _mouseX;
    this.mouseY = _mouseY;
    this.radius = _radius;
    this.color = _color;
    this.form = _form;
   this.randomEffekt();
 
    }
    public life(){
        if(this.lifespan>0){
            this.radius2 = this.radius;
         
            
            this.radius2*=this.lifespan;
            this.lifespan-=0.3;
            this.draw();
            this.forceEffekt();
            
        }
    }
    public randomEffekt():void{
        for(let i:number = 0; i<this.particleMax; i++){
        this.forceX.push(this.lifespan/6);
        this.forceY.push(this.lifespan/6);
        this.forceX[i] += (Math.random())*this.random*(this.lifespan/6);
        this.forceY[i] += (Math.random())*this.random*(this.lifespan/6);
        this.turbulensX.push(this.forceX[i]);
        this.turbulensY.push(this.forceY[i]);
        }
       
    }
    public forceEffekt():void{
        
        for(let i:number = 0; i<this.particleMax; i++){
            this.turbulensX[i] += this.forceX[i];
            this.turbulensY[i] += this.forceY[i];
            }
      
    }

public drawStar(x: number, y: number, radius: number){
    crc2.beginPath();
    for (let i = 0; i < 5; i++) {
      const xCoordinate = x + radius * Math.cos(((18 + i * 72) / 180) * Math.PI);
      const yCoordinate = y + radius * Math.sin(((18 + i * 72) / 180) * Math.PI);
      crc2.lineTo(xCoordinate, yCoordinate);
    }
    crc2.closePath();
    crc2.fill();
}

    public draw(): void {
for(let i:number = 0; i<this.particleMax; i+=4){
    if(this.form == "kreis"){
        crc2.beginPath;
        crc2.fillStyle = this.color;
        console.log(this.color);
        //crc2.fillRect(this.mouseX +  this.turbulensX[i+0], this.mouseY+ this.turbulensY[0+i], this.radius2,this.radius2);
       crc2.arc(this.mouseX +  this.turbulensX[i+0], this.mouseY+ this.turbulensY[0+i], this.radius2, 0, Math.PI * 2);
        crc2.closePath();
        crc2.fillStyle = "white";
       
        crc2.beginPath;
        crc2.fillStyle = this.color;
        crc2.arc(this.mouseX  -  this.turbulensX[i+1], this.mouseY+ this.turbulensY[1+i], this.radius2, 0, Math.PI * 2);
        crc2.fill();
        crc2.closePath();

        crc2.beginPath;
        crc2.fillStyle = this.color;
        crc2.arc(this.mouseX  +  this.turbulensX[i+2], this.mouseY- this.turbulensY[2+i], this.radius2, 0, Math.PI * 2);
        crc2.fill();
        crc2.closePath();

        crc2.beginPath;
        crc2.fillStyle = this.color;
        crc2.arc(this.mouseX  -  this.turbulensX[i+3], this.mouseY- this.turbulensY[3+i], this.radius2, 0, Math.PI * 2);
        crc2.fill();
        crc2.closePath();

    }
    if(this.form == "rect"){
        crc2.beginPath;
        crc2.fillStyle = this.color;
        console.log(this.color);
        crc2.fillRect(this.mouseX +  this.turbulensX[i+0], this.mouseY+ this.turbulensY[0+i], this.radius2,this.radius2);
     
        crc2.closePath();
        crc2.fillStyle = "white";
       
        crc2.beginPath;
        crc2.fillStyle = this.color;
        crc2.fillRect(this.mouseX  -  this.turbulensX[i+1], this.mouseY+ this.turbulensY[1+i], this.radius2,this.radius2);
     
        crc2.closePath();

        crc2.beginPath;
        crc2.fillStyle = this.color;
        crc2.fillRect(this.mouseX  +  this.turbulensX[i+2], this.mouseY- this.turbulensY[2+i], this.radius2, this.radius2);
        crc2.fill();
        crc2.closePath();

        crc2.beginPath;
        crc2.fillStyle = this.color;
        crc2.fillRect(this.mouseX  -  this.turbulensX[i+3], this.mouseY- this.turbulensY[3+i], this.radius2, this.radius2);
        crc2.fill();
        crc2.closePath();

    }
    if(this.form == "stern"){
      
      crc2.fillStyle = this.color;
      this.drawStar(this.mouseX +  this.turbulensX[i+0], this.mouseY+ this.turbulensY[0+i], this.radius2);
      this.drawStar(this.mouseX -  this.turbulensX[i+0], this.mouseY+ this.turbulensY[0+i], this.radius2);
      this.drawStar(this.mouseX +  this.turbulensX[i+0], this.mouseY- this.turbulensY[0+i], this.radius2);
      this.drawStar(this.mouseX -  this.turbulensX[i+0], this.mouseY- this.turbulensY[0+i], this.radius2);
    }
}
        
    }
  }
}