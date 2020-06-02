class Bird{
  constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.2,
      }
      this.body = Bodies.rectangle(x, y, 40,40, options);
      this.width = 40;
      this.height = 40;
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      fill ("violet");
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      rect( 0, 0, this.width,this.height);
      pop();
    }
}


  