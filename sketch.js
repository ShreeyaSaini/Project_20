var car,wall;
var speed, weight;
var deform;

function setup() {
  createCanvas(1600,400);
  car = createSprite(30, 200, 50, 50);
  car.shapeColor = "blue";

  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = color(80,80,80);

  speed = random(55,90);
  weight = random(400,1500);

  car.velocityX = speed;
  
  deform = 0.5*weight*speed*speed/22500;
}

function draw() {
  background("black");  

  if (wall.x - car.x < car.width/2 + wall.width/2
    && deform < 100) {
  car.shapeColor = color(0,255,0);
  car.velocityX = 0;
  
  wall.shapeColor = color(0,255,0);

  } 
  
  if (wall.x - car.x < car.width/2 + wall.width/2
    && deform > 180) {
      car.shapeColor = color(230,230,0);
      car.velocityX = 0;

     wall.shapeColor = color(230,230,0);

  } 

  if (wall.x - car.x < car.width/2 + wall.width/2
    && deform < 180 && deform > 100) {
car.shapeColor = color(255,0,0);
car.velocityX = 0;

wall.shapeColor = color(255,0,0);

    }

  drawSprites();
}