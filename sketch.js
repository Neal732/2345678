
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, groundObject;
var mango1,mango2,mango3,mango4,mango5, Stone;
var world,boy;
var slingShot;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1120,110,30);
	mango3=new mango(1140,90,30);
	mango4=new mango(1160,120,30);
	mango5=new mango(1180,80,30);

	Stone=new stone(235,420,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);	
	Engine.run(engine);

	slingShot = new Slingshot(Stone.body,{x:235,y:420});

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
  
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  Stone.display();
  slingShot.display();

  groundObject.display();

  detectollision(Stone,mango1)
  detectollision(Stone,mango2)
  detectollision(Stone,mango3)
  detectollision(Stone,mango4)
  detectollision(Stone,mango5)
}

function mouseDragged(){
    Matter.Body.setPosition(Stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingShot.fly()    
}

function detectollision(Stone, mango1){
	var distance=dist(Stone.body.position.x,Stone.body.position.y, mango1.body.position.x, mango1.body.position.y )
	  if(distance<=mango1.r+Stone.r){
		Matter.Body.setStatic(mango1.body,false)
	  }
}