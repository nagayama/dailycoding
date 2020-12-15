precision mediump float;

uniform vec4 uMaterialColor;

varying vec2 vUv;
uniform float uTime;
uniform sampler2D uTex;


void main(void) {
  float time = uTime;
  vec2 uv = vUv;

  float rep = sin(time)*10.0+10.0;

  vec2 repeat = vec2( rep/2.0,rep);

  uv.y += cos(time*2.0) * 0.2;
  float i = floor(uv.y*rep)/rep;
  uv.x += i+sin(time+sin(i*8.0));
  //uv.x += sin(uv.y + time*5.0) * 0.5;
  uv = fract(uv*repeat);
  vec4 color = texture2D(uTex, uv);
  gl_FragColor =color;
}