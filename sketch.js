const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

/*function preload()
{
	
}*/

function setup() {
	createCanvas(900, 1100);


	engine = Engine.create();
	world = engine.world;

  roofObject = new Roof (450,70,360,30);

	bobObject1 = new Bob (250,1070,70,70);
  bobObject2 = new Bob (350,1070,70,70);
	bobObject3 = new Bob (450,1070,70,70);
	bobObject4 = new Bob (550,1070,70,70);
  bobObject5 = new Bob (650,1070,70,70);
  
  rope1 = new Rope (bobObject1.body,roofObject.body,bobDiameter*2,0);
  rope2 = new Rope (bobObject2.body,roofObject.body,bobDiameter*2,0);
	rope3 = new Rope (bobObject3.body,roofObject.body,bobDiameter*2,0);
	rope4 = new Rope (bobObject4.body,roofObject.body,bobDiameter*2,0);
	rope5 = new Rope (bobObject5.body,roofObject.body,bobDiameter*2,0);

  /*if(upArrow is pressed) {
    bobObject1.gravity= -0.4
  }*/

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  drawSprites();
 
}



