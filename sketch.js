let snow = [];
let amt = 100;
let toggle = false;

function setup() {
  createCanvas(600, 400);

  for (let i = 0; i < amt; i++) {
    snow.push(new Flake())
  }
}

function draw() {
  background(60);
	toggle = true
  if (toggle) {
    for (let i = 0; i < snow.length; i++) {
      noStroke()
      fill(0, snow[i].pos.y, 255)
      snow[i].render()
      snow[i].update()
    }
  }
}

function fade() {
  rect(0, 0, width, height)
}