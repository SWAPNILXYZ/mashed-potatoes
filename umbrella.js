class Umbrella{
    constructor(x, y, radius){
     var options = {
         'friction': 0.1,
         'isStatic':true
     }
     this.umbrella = Bodies.circle(x, y, radius, options);
     this.radius = radius;
     World.add(world, this.umbrella);
    }
    display(){
        fill("blue");
        translate(this.umbrella.position.x, this.umbrella.position.y);
        ellipseMode(CENTER);
        ellipse(0, 0, this.radius);
      
    }
}