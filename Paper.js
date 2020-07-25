class Paper {
    constructor(x,y,) {
      var options = {
        restitution:0.8,
        density:0.8,
        friction:0.8
      }
      this.body = Bodies.circle(x,y,30,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("yellow");
      ellipse(pos.x, pos.y,30,30);
    }
  };
