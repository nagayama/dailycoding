attribute vec3 aPosition;
attribute vec2 aTexCoord;

uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;
uniform float time;

varying vec2 vUv;

void main(void) {
  vUv = aTexCoord;
  vec3 pos = aPosition;
  //pos.z += sin(aPosition.x + Time);
  gl_Position = uProjectionMatrix * uModelViewMatrix * vec4(pos, 1.0);;
}