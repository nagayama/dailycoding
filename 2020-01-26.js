const colors = ['#f6e1e1', '#ff9d76', '#eb4d55', '#333366']
const balls = []

function setup() {
  createCanvas(640, 640)
  for (let i = 0; i < 20; i++) {
    balls.push(ball())
  }
  background(50)
}

function draw() {
  for (let i = 0; i < balls.length; i++) {
    balls[i].draw()
  }
}


function ball() {
  const M = random(10, 20),
    K = 0.3,
    D = 0.999,
    color = random(colors)


  // Spring simulation variables
  let tgt = createVector(width / 2, height / 2),
    vec = createVector(random(width), random(height)),
    force,
    acl,
    vel = createVector(random(10, 20), random(10, 20))

  const draw = () => {
    force = p5.Vector.sub(vec, tgt).mult(-K)
    acl = p5.Vector.div(force, M)
    vel = p5.Vector.add(vel, acl).mult(D)
    vec.add(vel)
    noStroke()
    fill(color)
    circle(vec.x, vec.y, 2)
  }

  return {
    draw
  }


}
