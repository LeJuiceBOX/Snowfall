class Flake {

  constructor() {
    this.spawnPos = createVector(random(width), random(height), random(1, 4))
    this.pos = this.spawnPos
    this.size = createVector(7 / this.pos.z, 7 / this.pos.z)
    this.vel = createVector(0, random(1, 3))
  }

  render() {
    ellipse(this.pos.x, this.pos.y, this.size.x, this.size.y)
  }

  update() {
    this.pos.add(this.vel)

    if (this.pos.y > height) {
      this.pos = createVector(random(width), 5)
    }

    if (this.pos.x < 0) {
      this.pos.x = width
    }

    if (this.pos.x > width) {
      this.pos.x = 0
    }
  }

}