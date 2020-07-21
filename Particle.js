class Particle {
    constructor(x, y, radius){
  
    var options = {
     'restitution':0.3,
    }
    this.radius = radius;

    this.body = Bodies.circle(x, y, radius, options);
    this.color = color(random(0,255), random(0,255), random(0,255));
    World.add(world, this.body);
  
    }
  
    display(){
  
      var pos = this.body.position;
      var angle = this.body.angle;

      push();
      translate(pos.x,pos.y);
      rotate(angle);
      noStroke();
      ellipseMode(RADIUS);
      ellipse(pos.x,pos.y,this.radius);
      pop();
    }
  
  
  }