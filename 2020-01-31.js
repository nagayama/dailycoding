let angle = 0
let w = 40
let cols
let rows
let curves = []
let g

function setup() {
  createCanvas(800, 800)
  cols = width / w - 1
  rows = height / w - 1
  g = createGraphics(width, height)
  g.background(0, 0)
  g.pixelDensity(2)

  for (let j = 0; j < rows; j++) {
    curves[j] = []
    for (let i = 0; i < cols; i++) {
      curves[j][i] = new Curve(j, i)
    }
  }
}

function draw() {
  background(0)

  fill(255);
  stroke(0);
  const d = w - 0.1 * w
  const r = d / 2
  noFill()

  for (let i = 0; i < cols; i++) {
    const cx = w + i * w + w / 2
    const cy = w / 2
    stroke(255)
    strokeWeight(1)
    ellipse(cx, cy, d, d)
    const x = r * Math.cos(angle * (i + 1) - HALF_PI)
    const y = r * Math.sin(angle * (i + 1) - HALF_PI)
    strokeWeight(4)
    point(cx + x, cy + y)

    stroke(255, 40)
    strokeWeight(1)
    line(cx + x, y + w / 2, cx + x, height)
    for (let j = 0; j < rows; j++) {
      curves[j][i].setX(cx + x)
    }
  }

  for (let j = 0; j < rows; j++) {
    const cx = w / 2
    const cy = w + j * w + w / 2
    stroke(255)
    strokeWeight(1)
    ellipse(cx, cy, d, d)
    const x = r * Math.cos(angle * (j + 1) - HALF_PI)
    const y = r * Math.sin(angle * (j + 1) - HALF_PI)
    strokeWeight(4)
    point(cx + x, cy + y)

    stroke(255, 40)
    strokeWeight(1)
    line(x + w / 2, cy + y, width, cy + y)
    for (let i = 0; i < cols; i++) {
      curves[j][i].setY(cy + y)
    }

  }

  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      curves[j][i].addPoint()
      curves[j][i].show()
    }
  }
  image(g, 0, 0)
  angle -= 0.01
}



class Curve {

  constructor(col, row) {
    this.row = row
    this.col = col
    this.path = []
  }

  setX(x) {
    this.x = x
  }

  setY(y) {
    this.y = y
  }

  addPoint() {
    this.path.push({
      x: this.x,
      y: this.y
    })
    if (this.path.length > 8) {
      this.path.shift()
    }
  }

  show() {
    g.stroke(255, 10)
    g.strokeWeight(1)
    g.noFill()
    g.beginShape()
    for (let i = 0; i < this.path.length; i++) {
      g.curveVertex(this.path[i].x, this.path[i].y)
    }
    g.endShape()
    g.strokeWeight(1)

    stroke(255)
    strokeWeight(1)
    point(this.x, this.y)
  }
}
