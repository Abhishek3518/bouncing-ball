const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world;
var ground,ball;











function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  var option1={
    isStatic:true
  }
  ground=Bodies.rectangle(200,380,800,50,option1)
  var option2={
    restitution:0.8
  }
  ball=Bodies.circle(200,100,10,option2)
  World.add(world,ground)
  World.add(world,ball)
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  rectMode(CENTER)
  fill("brown")
  rect(ground.position.x,ground.position.y,400,50)
  fill("pink")
  circle(ball.position.x,ball.position.y,50)
  drawSprites();
}