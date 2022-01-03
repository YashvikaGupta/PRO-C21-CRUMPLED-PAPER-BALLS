
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var groundObj;
var ball; 
var rightSide;
var leftSide;
var radius= 30;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1500,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.



	Engine.run(engine);

	var ball_options=
	{
		isStactic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball=Bodies.circle(200,500,radius,ball_options);
    World.add(world,ball);
	
	groundObj= new Ground(width/2,550,width,20);
	leftSide= new Ground(1100,500,20,120);
	rightSide= new Ground(1300,500,20,120);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  groundObj.display();
  leftSide.display();
  rightSide.display();

  ellipse(ball.position.x,ball.position.y);
  //drawSprites();

 
}

function keyPressed()
	{
		if(keyCode === UP_ARROW)
		{
			Matter.Body.applyForce(ball,ball.position,{x:100,y:-200});
		}
	}



