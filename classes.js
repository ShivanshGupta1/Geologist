class Hammer {
  constructor(width, height) {
    this.options = {
      restitution: 0.5,
      friction: 1,
      density: 2,
    };
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(
      mouseX,
      mouseY,
      this.width,
      this.height,
      this.options
    );
    this.rect = 0;
    World.add(world, this.body);
  }
  show() {
    push();
    translate(mouseX, mouseY);
    rotate(this.body.angle);
    rectMode(CENTER);
    fill("black");
    this.rect = rect(0, 0, this.width, this.height);
    pop();
  }
}

class Plane {
  constructor(x, y, width, height) {
    this.width = width;
    this.height = height;
    this.options = {
      isStatic: true,
    };
    this.body = Bodies.rectangle(x, y, this.width, this.height, this.options);
    World.add(world, this.body);
  }
  show() {
    rectMode(CENTER);
    fill("brown");
    this.rect = rect(
      this.body.position.x,
      this.body.position.y,
      this.width,
      this.height
    );
  }
}

class Stone {
  constructor(x,y,width,height){
    this.options = {
      restitution: 0.5,
      friction: 2,
      density: 5,
    }
    this.width = width;
    this.height = height

    this.body = Bodies.rectangle(x,y,this.width,this.height,this.options)
 
    World.add(world,this.body);

  }
  show() {
    push()
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle)
    rectMode(CENTER)
    fill("grey")
    this.rect = rect(0,0,this.width,this.height);
    pop()

  }
}
class Rubber {
  constructor(x,y,radius){
    this.options = {
      restitution: 0.3,
      friction: 5,
      density: 1,
    }
    this.radius = radius
    this.body = Bodies.circle(x,y,this.radius,this.options)
 
    World.add(world,this.body);

  }
  show() {
    push()
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle)
    fill("white")
    this.circle = ellipse(0,0,this.radius);
    pop()

  }
}
class Sand {
  constructor(x,y,radius){
    this.options = {
      restitution: 0.3,
      friction: 5,
      density: 2,
    }
    this.radius = radius
    this.body = Bodies.circle(x,y,this.radius,this.options)
 
    World.add(world,this.body);

  }
  show() {
    push()
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle)
    fill("yellow")
    this.circle = ellipse(0,0,this.radius);
    pop()

  }
}
class Iron {
  constructor(x,y,width,height){
    this.options = {
      restitution: 0.5,
      friction: 3,
      density: 10,
    }
    this.width = width;
    this.height = height

    this.body = Bodies.rectangle(x,y,this.width,this.height,this.options)
 
    World.add(world,this.body);

  }
  show() {
    push()
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle)
    rectMode(CENTER)
    fill("grey")
    this.rect = rect(0,0,this.width,this.height);
    pop()

  }
}
