const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ball
var engine,world,ground;
function setup() {
   var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
   var ground_options = {
     isStatic : true
   }
ground = Bodies.rectangle(200,390,400,20,ground_options);
World.add(world,ground);
console.log(ground);

var ball_options = {
  restitution : 1.0
}
ball = Bodies.circle(200,100,20,ball_options);
 World.add(world,ball);
 
}

function draw() {
  background(255,255,255);  
  rectMode(CENTER);
  Engine.update(engine);
  rect(ground.position.x,ground.position.y,400,20);
  elipseMode(RADIUS)
  elipse(ball.position.x,ball.position.y,20,20);
  drawSprites();
}