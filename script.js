// for red, green, and blue color values
let r, g, b
let r1, g1, b1

let rad = 130 // Width of the shape
let xpos, ypos // Starting position of shape

let xspeed = 5 // Speed of the shape
let yspeed = 5 // Speed of the shape

let xdirection = 1 // Left or Right
let ydirection = 1 // Top to Bottom

function windowResized() {
  console.log("resized");
  let width = document.querySelector("#sketch-div").clientWidth;
  console.log(width);
  let height = document.querySelector("#sketch-div").clientHeight;
  console.log(height);
 
  resizeCanvas(width, windowHeight);
  
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight)
  canvas.parent('sketch-div')
  canvas.position(0, 0)
  canvas.style('z-index', '-1')
  // Pick colors randomly
  r = random(255)
  g = random(255)
  b = random(255)
  r1 = random(255)
  g1 = random(255)
  b1 = random(255)

  frameRate(30)
  ellipseMode(RADIUS)
  // Set the starting position of the shape
  xpos = width / 2
  ypos = height / 2
}

function draw() {
  background(r1, g1, b1, 255)
  // Draw a circle
  strokeWeight(2)
  noStroke()
  //stroke(r, g, b);
  fill(r, g, b, 255)
  // Draw the shape
  ellipse(xpos, ypos, rad, rad)
  // Update the position of the shape
  xpos = xpos + xspeed * xdirection
  ypos = ypos + yspeed * ydirection

  // Test to see if the shape exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1
  if (xpos > width - rad || xpos < rad) {
    xdirection *= -1
  }
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1
  }
}

// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, xpos, ypos)
  if (d < 100) {
    // Pick new random color values
    r = random(255)
    g = random(255)
    b = random(255)
    //-->Background changes
    r1 = random(255)
    g1 = random(255)
    b1 = random(255)
  }
}
