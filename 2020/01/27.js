const SIZE = 800
const divs = 2
const colors = ['#f6e1e1', '#ff9d76', '#eb4d55', '#333366']

setup = () => {
  createCanvas(SIZE, SIZE)
  frameRate(2)
  background(0)
}

draw = () => {
  background(200)
  drawCircle(0, 0, width / divs, height / divs)
}

drawCircle = (x, y, w, h) => {
  push()
  rectMode(CENTER)
  translate(x, y)
  for (let i = 0; i < divs; i++) {
    for (let j = 0; j < divs; j++) {
      if (w > 300 || w > divs * 2 && random(1) > 0.5) {
        drawCircle(i * w, j * w, w / divs, h / divs)
      } else {
        push()
        noStroke()
        translate(i * w, j * w)
        fill(random(colors))
        switch (Math.floor(random(0, 4))) {
          case 1:
            translate(w, 0)
            scale(-1, 1)
            break
          case 2:
            translate(0, w)
            scale(1, -1)
            break
          case 3:
            translate(w, w)
            scale(-1, -1)
            break
          default:
        }
        arc(0, 0, w * 2, h * 2, 0, HALF_PI)
        pop()
      }
    }
  }
  pop()
}
