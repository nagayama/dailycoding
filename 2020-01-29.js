const SIZE = 640
const chars = ['😀', '🤔', '😇', '😂', '🤢', '👹', '🤡']
let balls = []

setup = () => {
  createCanvas(SIZE, SIZE)
  background(0)
  balls.push(ball(0, 0, 0))
  rectMode(CENTER)
}

draw = () => {
  background(0, 40)
  let x = random(-width / 2, width / 2)
  let y = random(-height / 2, height / 2)
  let l = balls.length
  let c = true

  if (l < 200 && dist(x, y, 0, 0) < width / 2) {
    for (let i = 0; i < l; i++) {
      const other = balls[i]
      const otherV = other.getVector()
      const d = dist(otherV.x, otherV.y, x, y)
      if (d < other.getR() / 2) {
        c = false
        break
      }
    }
    if (c) {
      balls.push(ball(x, y, balls.length))
    }
  }

  translate(width / 2, height / 2)
  textAlign(CENTER, CENTER)
  balls.forEach(ball => ball.draw())

}

ball = (x, y, id) => {
  let r = 1
  let growing = true
  const v = createVector(x, y)
  const char = random(chars)
  const draw = () => {
    for (let i = id + 1; i < balls.length; i++) {
      const other = balls[i]
      const dist = other.getVector().dist(v)
      if (dist < (r + other.getR()) / 2) {
        setGrowing(false)
        other.setGrowing(false)
      }
    }

    textSize(r)
    const v2 = v.copy()
    v2.rotate(radians(Math.sin(radians(frameCount / 3)) * 360))
    text(char, v2.x, (v2.y + r / 8))
    if (growing) {
      r += 2
    }
  }

  const getR = () => r
  const getVector = () => v
  const setGrowing = bool => growing = bool

  return {
    draw,
    getR,
    getVector,
    setGrowing
  }

}
