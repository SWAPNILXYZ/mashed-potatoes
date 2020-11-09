class Drops{
    constructor(x, y){
     var options = {
         'friction': 0.1,
         'isStatic':false
     }
     this.body = Bodies.circle(x, y, 5 ,options);
     this.radius = 5;
     World.add(world, this.body);
    }
    updateY(){
        if (this.body.position.y > height){
        Matter.Body.setPosition(this.body, {x: random(0, 1200), y: random(0, 1200)})
        }
    }
    display(){
        fill("blue");
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(CENTER);
        ellipse(0, 0, this.radius, this.radius);
      
    }
}























