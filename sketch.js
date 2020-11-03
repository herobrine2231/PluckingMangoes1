
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
const Constraint=Matter.Constraint;

var ground1;
var tree1;
var stone1;
var boyImage, boy1;
var mango1, mango2, mango3, mango4, mango5;
var launcherObject;
var launchingForce=100;

function preload()
{
	boyImage=loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;


	

	//Create the Bodies Here.


	
	stone1= new Stone(235,420,30);

	mango1= new Mango(1100,100,30);
	mango2= new Mango(1010,140,30);
	mango3= new Mango(1000,200,30);
	mango4= new Mango(900,230,30);
	mango5= new Mango(900,160,30);

	tree1= new NewTree(1050,580);

	ground1= new ground(width/2,600,1300,20);

launcherObject = new slingShot(stone1.body,{x:235,y:420})
	

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1300,
		  height: 600,
		  wireframes: false
		}
	  });

	Engine.run(engine);
//	Render.run(render);
  
}


function draw() {
 // rectMode(CENTER);
  background(230);
 
  image(boyImage, 200,340,200,300);

  tree1.display();
 
 stone1.display();

mango1.display();
mango2.display();
mango3.display()
mango4.display();
mango5.display();

stone1.display();

ground1.display();

launcherObject.display();


detectCollision(stone1, mango1);
detectCollision(stone1, mango2);
detectCollision(stone1, mango3);
detectCollision(stone1, mango4);
detectCollision(stone1, mango5);


 
 //drawSprites();
 
}

function keyPressed()
{
	if(keyCode===32)
	{
		Matter.Body.setPosition(stone1.body,{x:235,y:420});
		launcherObject.attach(stone1.body);
	}
}


function detectCollision(lstone,lmango)
{
	mangoBodyPosition=lmango.body.position;
	stoneBodyPosition=lstone.body.position;

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance<=lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body, false)
	}
}

function mouseDragged()
{
	Matter.Body.setPosition(stone1.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
    launcherObject.fly();
}




