var thickness,wall;
var speed,weight,bullet;
var damage;
function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(52,30);
  thickness=random(23,83);
  bullet=createSprite(50, 200, 50, 10);
  wall=createSprite(1500,200,thickness,canvas.height/2);
  wall.shapeColor = (80,80,80);
  bullet.shapeColor = "white";
  damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
}
function draw() {
  background("black");
  console.log(damage); 
  bullet.velocityX = speed;  if(bullet.isTouching(wall)){
    bullet.velocityX = 0;
  }
  if(((damage<=10))&&(bullet.isTouching(wall))){
    bullet.shapeColor = "green";
    console.log(damage);
     }
  if((damage >=10)&&(bullet.isTouching(wall))){
      bullet.shapeColor = "red";
  }
  drawSprites();
}