int numBalls = 1;

float gravity = 0.13;
float friction = -0.6;

Ball ball;

boolean bStarted;

void setup() {
  size(640, ($(window).height()-$("#footer").height()));

  bStarted = false;
}

void start() {
  ball = new Ball(width/2, 10, 370);
  bStarted = true;
}

void draw() {
  background(207, 236, 247, 0);

  if( bStarted ) {
    ball.move();
    ball.display();    
  }
}

void mousePressed() {
  ball.mousePressed( mouseX, mouseY );
}

class Ball {

  float x, y;
  float diameter;
  float vx = 0;
  float vy = 0;
  float time = 0;
  PImage beachball;
  boolean alive = true;

  Ball(float xin, float yin, float din) {
    x = xin;
    y = yin;
    diameter = din;
    beachball = loadImage("beachball.png");
  }

  void mousePressed( int _x, int _y ) {
    if ( abs(x-_x) < 370/2 && abs(y-_y) < 370/2 ) {
      alive = true;
      increaseCount();
      vy = -6;
      if ( vx == 0 ) {
        vx = -random(1, 3);
      } 
      else {
        vx *= 1.02;
      }
    }
  }

  void move() {
    if( alive ) {
      vy += gravity;
      x += vx;
      y += vy;
  
      if ( vy < -13 ) {
        vy = -13;
      }
  
      if (x + diameter/2 > width) {
        x = width - diameter/2;
        vx *= friction;
      } 
      else if (x - diameter/2 < 0) {
        x = diameter/2;
        vx *= friction;
      } 
      if (y + diameter/2 > height) {
        y = height - diameter/2;
        vy *= friction;
        
        if( millis() - time < 16 ) {
          alive = false;
        } else {
          time = millis();
        }
      }  
      else if (y - diameter/2 < 0) {
        y = diameter/2;
        vy *= friction;
      }
    }
  }

  void display() {
    image(beachball, x-(370/2), y-(370/2), 370, 370);
  }
}


