const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, platform1, platform2;
var ball, rope;
var box1, box2, box3, box4, box5, box6;
var box7, box8, box9, box10, box11, box12;

function setup() {
  createCanvas(1600,600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(800, 580, 1600, 20);
  ball = new Ball(130, 220);
  platform1 = new Ground(560, 400, 300, 20);
  platform2 = new Ground(1150, 340, 300, 20);
  rope = new SlingShot(ball.body, {x:130, y:220});
  //the one in the front
  box1 = new Box(570, 350, 100, 80);
  box2 = new Box(670, 350, 100, 80);
  box3 = new Box(470, 350, 100, 80);
  box4 = new Box(620, 300, 100, 80);
  box5 = new Box(520, 300, 100, 80);
  box6 = new Box(570, 180, 100, 80);
  //the one in the back
  box7 = new Box(1150, 260, 100, 80);
  box8 = new Box(1050, 260, 100, 80);
  box9 = new Box(1250, 260, 100, 80);
  box10 = new Box(1200, 150, 100, 80);
  box11 = new Box(1100, 150, 100, 80);
  box12 = new Box (1150, 100, 100, 80);
}

function draw() {
  background(0);  
  Engine.update(engine);

  ground.display();
  ball.display();
  platform1.display();
  platform2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  rope.display();

  //text("x:"+ mouseX+", y :"+mouseY, mouseX,mouseY);
}

function mouseDragged() {
  Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY});
}

function mouseReleased() {
    rope.fly();
    
}

function keyPressed() {
  if(keyCode === 32){
    rope.attach(ball.body);
    Matter.Body.setPosition(ball.body, {x: 130, y:220});
  }
}