
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var block1,block2,block3;
var engine,world;



function setup() {
	createCanvas(550, 600);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui

var plane_options={
	isStatic:true
}


	plane = Bodies.rectangle(600,580,1200,2,plane_options);
	World.add(world,plane);


var block1_options = {
restitution:0.5,
friction:0,
frictionAir:0
}

var block2_options = {
	restitution:0.7,
	friction:0,
	frictionAir:0
	}

	var block3_options = {
restitution:0.6,
friction:0,
frictionAir:0
}



	block1 = Bodies.circle(220,10,10,block1_options);
	World.add(world,block1);

	block2 = Bodies.rectangle(110,50,10,10,block2_options);
	World.add(world,block2);

	block3 = Bodies.rectangle(350,50,10,10,block3_options);
	World.add(world,block3);

	
	fill("green");
	rectMode(CENTER); 
	ellipseMode(RADIUS);

}


function draw() {
  background("gray");

  Engine.update(engine);

rect(plane.position.x,plane.position.y,1200);

ellipse(block1.position.x,block1.position.y,30 );

rect(block2.position.x,block2.position.y,30,30);

rect(block3.position.x,block3.position.y,50,60);
}