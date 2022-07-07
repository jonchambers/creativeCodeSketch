function setup() {
  createCanvas(800, 800);
  background(13, 214, 191);
}

function draw() {

  smooth();
  stroke(10, 143, 245);

  fill(45, 200, 120);
  ellipse(mouseX, mouseY, mouseX, 150);

  //a point is only one x and y
  point(400, 500);

  strokeWeight(20);
  stroke(0) 
  line(0, 0, 800, mouseX);

  strokeWeight(1);
  noFill();
  rect(300, 400, 200, 50);

  noStroke();
  fill(210, 10, 245);
  triangle(200, 600, 300, 650, 100, 700);
  print(mouseX)
}
