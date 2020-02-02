let bodypix;
let vid;
let segmentation;
let img;
let g

const options = {
  outputStride: 8, // 8, 16, or 32, default is 16
  segmentationThreshold: 0.4 // 0 - 1, defaults to 0.5
}

function setup() {
  createCanvas(320, 240)
  background(255)
  vid = createVideo("dance2.mp4");
  vid.size(width, height);
  vid.loop()
  vid.volume(0);
  vid.hide()
  bodyPix = ml5.bodyPix(vid, options, modelReady)
  background(255)
  g = createGraphics(width, height)

}

function modelReady() {
  bodyPix.segment(gotResults, options)
}


function gotResults(err, result) {
  segmentation = result;
  g = createGraphics(width, height)
  g.image(segmentation.backgroundMask, 0, 0, width, height)
  bodyPix.segment(vid, gotResults)
}

function draw() {
  image(vid, 0, 0, width, height)
  g.image(g, 5, 0, width, height)
  image(g, 0, 0, width, height)
}
