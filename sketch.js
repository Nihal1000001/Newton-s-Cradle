const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	
   roof=new Roof(400,100,600,20);
	bob1=new Bob(200,420);
	rope1=new Rope(bob1.body,roof.body,-180,0);
	bob2=new Bob(280,420);
  rope2=new Rope(bob2.body,roof.body,-100,10);
  bob3=new Bob(360.420);
  rope3 = new Rope(bob3.body,roof.body,-20,0);
  bob4= new Bob(480,420);
  rope4 = new Rope(bob4.body,roof.body,60,0);
  bob5=new Bob(500,420);
  rope5=new Rope(bob5.body,roof.body,140,0);
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("White");
  
  roof.display();
  bob1.display();
 rope1.display();
  bob2.display();
  rope2.display();
  bob3.display();
  rope3.display();
  bob4.display();
  rope4.display();
  bob5.display();
  rope5.display();
 
}

function keyPressed(){
	if(keyCode=== UP_ARROW){
	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-80,y:-80});
	}
  }

