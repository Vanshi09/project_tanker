// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse,
 MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*
const {Engine} = Matter 
is the same as 
const Engine = Matter.Engine
*/

/*const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
*/

var ground;
var ball1,ball2,ball3;
var tanker;
var canonBall;
var flag = "start";
var shoot;
var launcherX, launcherY;
var angle = 0;

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
var canvas = createCanvas(1200,400);

engine = Engine.create();
world = engine.world;
 ground = new Ground(600,400,1200,40);

 ball1 = new Ball(1000,100,25);
ball2 = new Ball(1100,100,25);
ball3 = new Ball(1100,100,25);

tanker = new Tanker(145,310,50,20);

canonBall = new CanonBall(20,20);

shoot = new ShootBall(canonBall.body,{x:145,y:310});
}

function draw() {
// Remember to update the Matter Engine and set the background.
background(255,255,255);
Engine.update(engine);
ground.display();
ball1.display();
ball2.display();
ball3.display();
tanker.display();
canonBall.display();
if(keyIsDown(UP_ARROW))
{
shoot.attach(canonBall.body);
}
shoot.display();
}


function keyReleased() {
    // Call the shoot method for the cannon.
    if(keyCode === DOWN_ARROW)
    {
    shoot.shoot();
    flag = "launch";
    }
}