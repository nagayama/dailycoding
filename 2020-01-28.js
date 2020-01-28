const SIZE = 800
const chars = ["😀", "🤔", "😇", "😂", "🤢", "👹", "🤡"]
let balls = []
const NUM = 3

setup = () => {
  createCanvas(SIZE, SIZE)
  frameRate(60)
  background(0)
  balls.push(ball(width / 2, height / 2, 0))
}

draw = () => {
  background(100)
  let x = random(width)
  let y = random(height)
  let l = balls.length
  let c = false

  if (dist(x, y, width / 2, height / 2) < width / 3) {
    for (let i = 0; i < l; i++) {
      const other = balls[i]
      const dist = other.getVector().dist(createVector(x, y))
      if (dist < other.getR() / 2) {
        c = true
        break
      }
    }
    if (!c) {
      balls.push(ball(x, y, balls.length))
    }
  }
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
        setGrawing(false)
        other.setGrawing(false)
      }
    }

    //circle(v.x, v.y, r)
    textSize(r)
    text(char, v.x - r / 2, v.y + r / 2.4)
    if (growing) {
      r += 2
    }
  }

  const getR = () => r
  const getVector = () => v
  const setGrawing = bool => growing = bool

  return {
    draw,
    getR,
    getVector,
    setGrawing
  }

}
