let capture = null
const WIDTH = 160
const HEIGHT = 120
let images = []
let buffer = null
const BUFFERNUM = HEIGHT

function setup() {
  createCanvas(WIDTH * 4, HEIGHT * 4)
  let constraints = {
    video: {
      mandatory: {
        maxWidth: WIDTH,
        maxHeight: HEIGHT
      }
    }
  };
  capture = createCapture(constraints)
  capture.size(WIDTH, HEIGHT)
  capture.hide()
  background(0)
  frameRate(30)
  buffer = createGraphics(WIDTH, HEIGHT * BUFFERNUM)
  buffer.pixelDensity(1)
  buffer2 = createGraphics(WIDTH, HEIGHT)
}

function draw() {
  scale(4)
  buffer.image(buffer.get(0, 0, WIDTH, HEIGHT * BUFFERNUM), 0, HEIGHT)
  buffer.image(capture, 0, 0)
  for (let i = 0; i < HEIGHT; i++) {
    buffer2.image(buffer.get(0, i * HEIGHT + i, WIDTH, 1), 0, i, WIDTH, 1)
  }
  image(buffer2, 0, 0)
}
