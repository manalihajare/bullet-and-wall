var bullet, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
speed=random(22,25)
weight=random(400,1500)
thickness= random(83,83)

 bullet=createSprite(50, 200, 80, 10);
 
bullet.velocityX = speed;

wall=createSprite(1100,200,thickness,height/2);
wall.shapeColor="white";

}

function draw(){
background("black");
bullet.shapeColor= "white";

if(hasCollided(bullet,wall)){
    
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(damage>30){
    wall.shapeColor=color(255,0,0);
  }

  if(damage<30){
    wall.shapeColor=color(0,255,0);
  }
  bullet.velocityX= 0;
}











  drawSprites();
}

function hasCollided(Lbullet,Lwall){

var bulletRightEdge=Lbullet.x+Lbullet.width;
  var  wallLeftEdge=Lwall.x;
if(bulletRightEdge>=wallLeftEdge)
{
  return true
}
return false;
}














