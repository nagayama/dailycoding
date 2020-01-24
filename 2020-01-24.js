const SIZE = 800
const divs = 2
const colors = ['#f6e1e1', '#ff9d76', '#eb4d55', '#333366']

const setup = () => {
  createCanvas(SIZE, SIZE)
  frameRate(1)
  background(0)
}

const draw = () => {
  background(0)
  drawRect(0, 0, width / divs, height / divs)
}

const drawRect = (x, y, w, h) => {
  push()
  translate(x, y)
  for (let i = 0; i < divs; i++) {
    for (let j = 0; j < divs; j++) {
      if (w > divs * 2 && random(1) > 0.5) {
        drawRect(i * w, j * w, w / divs, h / divs)
      } else {
        fill(random(colors))
        strokeWeight(0.25)
        rect(i * w, j * w, w, h)
      }
    }
  }
  pop()
}
