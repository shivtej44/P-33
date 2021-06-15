class Snow {
 constructor(x,y){
  var options = {

    density:10

  }
  this.body=Bodies.circle(x,y,5,options);
  World.add(world,this.body)
  this.snowImg = loadImage("snow4.webp");
  
 }

 display(){

  push();
  imageMode(CENTER);
  
  image(this.snowImg,this.body.position.x,this.body.position.y,30,30);

  pop();
 
 }

}