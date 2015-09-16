function setup() {
  createCanvas(windowWidth, windowHeight);
  translate(width / 2, height / 2);
}

function draw() {
  background(25);
  fill(0,255,255);
  ellipse(0,0, 200, 200);

  for (var S = 0; S < second(); S++) {
    fill(255,255,0);
    ellipse(0, -175, 5, 5);
    rotate(second()/540);
  }
  
  for (var M = 0; M < minute(); M++){
    fill(0,255,0);
    ellipse(-250, 0, 25,25);
    rotate(minute()/540);
  }

}