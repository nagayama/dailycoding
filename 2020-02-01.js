let vid
let poseNet
let pose
let skeleton

function setup() {
  createCanvas(640, 480)
  background(100)
  vid = createVideo("dance2.mp4");
  vid.size(640, 480);
  vid.loop()
  vid.volume(0);
  vid.hide()
  poseNet = ml5.poseNet(vid)
  poseNet.on('pose', gotPoses)
}

function gotPoses(poses) {
  if (poses.length > 0) {
    pose = poses[0].pose
    skeleton = poses[0].skeleton
  }
}

function draw() {
  push()
  scale(2)
  image(vid, 0, 0)
  pop()
  if (pose) {
    for (let i = 0; i < pose.keypoints.length; i++) {
      const x = pose.keypoints[i].position.x
      const y = pose.keypoints[i].position.y
      fill(255)
      noStroke()
      ellipse(x, y, 5)
    }
    for (let i = 0; i < skeleton.length; i++) {
      const a = skeleton[i][0]
      const b = skeleton[i][1]
      strokeWeight(1)
      stroke(255)
      line(a.position.x, a.position.y, b.position.x, b.position.y)
    }

  }
}
