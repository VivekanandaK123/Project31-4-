var engine,world;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
 
 ground = new Ground(240,795,480,10);

 for (var k = 0; k <= width; k=k+80){
  divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
 }

 for (var j = 40; j <= width; j=j+50){
   plinkos.push(new Plinko(j,75,7));
 }

 for (var j = 15; j <= width - 10; j=j+50){
  plinkos.push(new Plinko(j,175,7));
 }

 for (var j = 40; j <= width; j=j+50){
  plinkos.push(new Plinko(j,275,7));
}

for (var j = 15; j <= width - 10; j=j+50){
 plinkos.push(new Plinko(j,375,7));
}
 
}

function draw() {
  background("black"); 
  rectMode(CENTER);
  
  

  ground.display();

  if(frameCount%45===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,7));
  }

  for (var j = 0; j < particles.length; j++){
    particles[j].display();
   }
  
   for (var k = 0; k < divisions.length; k++){
    divisions[k].display();
   }

   for (var k = 0; k < plinkos.length; k++){
    plinkos[k].display();
   }

   
  
}