var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var rectleft,rectright,rectdown;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	rectdown=Bodies.rectangle(400,650,100,10,{isStatic:true});
	World.add(world,rectdown)
	rectleft=Bodies.rectangle(340,620,10,100,{isStatic:true});
	World.add(world,rectleft)
	rectright=Bodies.rectangle(460,620,10,100,{isStatic:true});
	World.add(world,rectright)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  rect(rectdown.position.x,rectdown.position.y,100,20)
  rect(rectleft.position.x,rectleft.position.y,25,100)
  rect(rectright.position.x,rectright.position.y,25,100)
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic( packageBody,false);
    
  }
}



