
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var paper;
var ground;
var log1,log2,log3;
var dustbin;

function preload(){

     
}


function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	
	
	paper = new Paper(200,350,50);
	ground = new Ground(750,690,1500,10)
	log1 = new Log(1250,675,200,20)
	log2 = new Log(1350,620,20,100)
	log3 = new Log(1150,620,20,100)
	dustbin = new Dustbin(1150,560,200,105)
	


	Engine.run(engine);

	

}


function draw() {
  background("white");
  Engine.update(engine);

  keyPressed();

  paper.display();
  ground.display();
  log1.display()
  log2.display();
  log3.display();
  dustbin.display()
  drawSprites();
 
}

function keyPressed(){
	if(keyDown("up")){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-40})
	}
}

