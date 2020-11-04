
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper=new Paper(100,500,50,50)

	Engine.run(engine);
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	
   box2=new Box(500,600,60,100);
   

}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  
  box2.display();
  
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}

