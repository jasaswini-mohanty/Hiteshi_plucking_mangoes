class Stone{
constructor(x,y){
    var options = {
        'restitution':0,
        'friction':1.0,
        'density':1.2,
       
    }
    this.body = Bodies.circle(x, y, 30,options)
    this.radius=30;
    //this.image= loadImage('Plucking mangoes/stone.png');
    World.add(world,this.body);
}

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        //imageMode(CENTER);
        //image(this.image, 0, 0, this.width, this.height);

        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }

}
