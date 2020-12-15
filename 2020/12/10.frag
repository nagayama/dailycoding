precision mediump float;

uniform vec4 uMaterialColor;

varying vec2 vUv;
uniform float uTime;
uniform sampler2D uTex;


void main(void) {
  float time = uTime;
  vec2 uv = vUv;
  vec2 repeat = vec2(5.0, 20.0);

  uv.x += sin(uv.y + time*2.0) * 0.2;

  uv = fract(uv*repeat + vec2(0.0,time));
  vec4 color = texture2D(uTex, uv);
  gl_FragColor =color;
}