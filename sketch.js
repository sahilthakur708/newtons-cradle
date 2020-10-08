
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rectangle1;


function setup() {
	createCanvas(1000, 1000);


	engine = Engine.create();
	world = engine.world;
	options={isStatic: true}
rectangle1=Bodies.rectangle(400,100,200,30,options)
World.add(world,rectangle1)
	//Create the Bodies Here.
ball1=new Ball(350,300,20)
ball2=new Ball(370,300,20)
ball3=new Ball(390,300,20)
ball4=new Ball(410,300,20)
	Engine.run(engine);
  chain1=new Chain(ball1.body,rectangle1.body,{x:400,y:100})
}


function draw() {
  rectMode(CENTER);
  background(250);
  ball1.display()
  ball2.display()
  ball3.display()
  ball4.display()
  rect(rectangle1.position.x,rectangle1.position.y,200,30)
  drawSprites();
 
}
//function keyPressed(){
 // Matter.Body.applyForce(ball1,)
//}


