var engine,world;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


function setup() {
  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
 
 ground = new Ground(240,790,480,20);

}

function draw() {
  background(255,255,255); 
  rectMode(CENTER);
  
  

  ground.display();

}