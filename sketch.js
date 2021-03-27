
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let hammer, plane, stone;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = new Hammer(50,50)
	plane = new Plane(400,600,800,20)
	stone = new Stone(200,100,50,50)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  hammer.show() 
  plane.show()
  stone.show()
  drawSprites();
 
}



