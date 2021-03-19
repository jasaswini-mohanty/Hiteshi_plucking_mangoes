class Mango{
   constructor(x,y,width,height){
    var options = {
        'restitution':0.5,
        'friction':1.0,
        'isStatic' : true,
        'density':0.5
    }
    this.body=Bodies.rectangle(x,y,width,height,options)
    this.height=height;
    this.width=width;
    //this.image = loadImage('Plucking mangoes/mango.png');
    World.add(world,this.body)
   }

  
  
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
   // imageMode(CENTER);
   // image(this.image, 0, 0, this.body.height,this.body.width);

   rectMode(CENTER);
   rect(0,0,this.width,this.height);

   if(this.body.speed>2 ){
    Matter.Body.setStatic(this.body,false);
  }
    console.log(this.body.speed);
    pop();
  }
}