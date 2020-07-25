
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var boxside1,boxside2,boxside3;
var paper;



function preload(){

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(500,600,1010,30);
	boxside1 = new Ground(590,530,5,80);
	boxside2 = new Ground(680,530,5,80);
	boxside3 = new Ground(638,570,95,5);
	paper = new Paper(200,550,10,10);	
	

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background(0);
  boxside1.display()
  boxside2.display()
  boxside3.display()
  paper.display()
  ground.display()
  
 
}
function keyPressed(){
	if (keyCode===UP_ARROW)
	Matter.Body.applyForce(paper.body,paper.body.position,{x:+50,y:-50});

}



