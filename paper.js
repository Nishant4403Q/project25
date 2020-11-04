class Paper{
    constructor(x,y,width,height){
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        dencity:1.2
    
    }
    this.body=Bodies.rectangle(x,y,50,50,options);
    World.add(world,this.body);
    this.image = loadImage("paper.png");
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        
        circle(0,0,30);
        imageMode(CENTER);
        image(this.image, 0, 0,this.width,this.height);
        pop() 
    }
}