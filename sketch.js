const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,250,280,20);


  box1 = new Box(600,220,40,40);
  box2 = new Box(557,220,40,40);
  box3 = new Box(514,220,40,40);
  box5 = new Box(643,220,40,40);
  box6 = new Box(686,220,40,40);
  box8 = new Box(580,178,40,40);
  box9 = new Box(537,178,40,40);
  box11 = new Box(623,178,40,40);
  box12 = new Box(666,178,40,40);
  box14 = new Box(600,136,40,40);
  box15 = new Box(557,136,40,40);
  box17 = new Box(643,136,40,40);
  box19 = new Box(580,93,40,40);
  box20 = new Box(623,93,40,40);
  box22 = new Box(600,48,40,40);
platform=new Ground(600,390,1200,20);

shot1= new Bird(200,50);

  

slingshot = new SlingShot(shot1.body,{x:200, y:50});

}

function draw() {
  Engine.update(engine);
  background(0); 

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box5.display();
  box6.display();
  box8.display();
  box9.display();
  box11.display();
  box12.display();
  box14.display();
  box15.display();
  box17.display();
  box19.display();
  box20.display();
  box22.display();

  shot1.display();
slingshot.display();
platform.display();


  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(shot1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
     slingshot.attach(shot1.body);
     Matter.Body.setPosition(shot1.body,{x:200,y:50});

  }
}