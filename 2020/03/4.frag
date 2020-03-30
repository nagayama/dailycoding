precision mediump float;

varying vec2 vTexCoord;

void main() {

  // position of the pixel divided by resolution, to get normalized positions on the canvas
  vec2 coord = vTexCoord;

  gl_FragColor = vec4(coord.x, coord.y, (coord.x+coord.y), 1.0 );

}

