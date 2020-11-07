
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground, boy, boyImg;
var Lstone, Lmango;
var ropeM, rope;

function preload()
{
	boyImg= loadImage("images/boy.png");
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree= new Tree(800, 450, 5, 6);
	stone= new Stone(200,200,15);
	ground= new Ground(500, 700, 1000, 20);

	Engine.run(engine);

	boy = createSprite(150,640,50,50);
	boy.addImage("Image", boyImg);
	boy.scale=0.1;
  
	mango1= new Mango(800,300,15);
	mango2= new Mango(810,340,15);
	mango3= new Mango(750,260,15);
	mango4= new Mango(660,310,15);
	mango5= new Mango(720,350,15);
	mango6= new Mango(850,320,15);
	mango7= new Mango(810,200,15);
	mango8= new Mango(710,400,15);
	mango9= new Mango(790,390,15);
	mango10= new Mango(900,410,15);

	rope= new Rope(stone.body, {x:97 ,y:590});
}


function draw() {

  Engine.update(engine);

  rectMode(CENTER);

  background(100);

  drawSprites();
  
  rope.display(); 

  tree.display(); 
  ground.display();
  stone.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);

}


function detectCollision(Lstone, Lmango){
	
	var mangoBodyPosition = Lmango.body.position;
	var stoneBodyPosition = Lstone.body.position;
	
	var distance= dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	
	if (distance <= Lmango.r+Lstone.r){
		Matter.Body.setStatic(Lmango.body, false);
	}

}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x: mouseX, y:mouseY});
}

function mouseReleased(){
	rope.fly();
	ropeM.fly();
}

function keyPressed(){
	if (keyCode === 32){
		Matter.Body.setPosition(stone.body,{x: 97, y:590 });
		ropeM = new Rope(stone.body, {x:97 ,y:590});
	}
}