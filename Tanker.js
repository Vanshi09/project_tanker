class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true
     }
     this.body = Bodies.rectangle(x,y,width,height,options);
     this.width = width;
     this.height = height;
     World.add(world,this.body);
    };

    display(){
      var pos = this.body.position;
    var angle = this.body.angle;
    if(keyIsDown("LEFT_ARROW") && angle>+1.5)
    {
      angle = angle-0.05;
      Matter.Body.setAngle(tanker.body.angle)
    }
    if(keyIsDown("RIGHT_ARROW") && angle<0)
    {
      angle = angle+0.05;
      Matter.Body.setAngle(tanker.body.angle)
    }
    launcherX = pos.x+((this.height+100)*cos(angle));
    launcherY = pos.y-((this.height-100)*sin(angle))
    if(keyIsDown("DOWN_ARROW"))
    {
      Matter.Body.setPosition(canonBall.body, {x:launcherX-100,y:launcherY+100})
    }
    if(keyIsDown("DOWN_ARROW") && angle>=-0.05)
    {
      Matter.Body.setPosition(canonBall.body, {x:launcherX-100,y:launcherY});
    }
    if(keyIsDown("DOWN_ARROW") && angle<=-1.4)
    {
      Matter.Body.setPosition(canonBall.body, {x:launcherX,y:launcherY+100});
    }
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    //rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
    rect(75,340,100,45);
    arc(125,340,80,70,PI,TWO_PI);
      // Draw the tanker the way you like.
  // You could also use an image if you want a specific look
  // arc coordinates = x,y,width,height,startangle,stopangle
    };
}
