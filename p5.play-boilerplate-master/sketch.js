var car, wall;
var speed,weight;
var crash_sound;


function setup()
{
  createCanvas(800,400);
  car=createSprite(50,200,50,50);
  speed=random(1,70);
  weight=random(400,1500);
  car.shapeColor="orange";
  car.velocityX=speed;
  wall=createSprite(750,200,60,400);
  wall.shapeColor="gray";
}

function draw()
{
  background(255,255,255);
  detect_c();
  drawSprites();
}

function detect_c()
{
  if(isTouching(car,wall))
  {
    car.velocityX=0;
    if(0.5*weight*speed*speed/2500<100)
    {
      car.shapeColor=color(0,255,0);
    }
    else if(0.5*weight*speed*speed/2500>180)
    {
      car.shapeColor=color(255,0,0);
    }
    else if(0.5*weight*speed*speed/2500>100 && 0.5*weight*speed*speed/2500<180)
    {
      car.shapeColor=color(230,230,0);
    }
  }
}