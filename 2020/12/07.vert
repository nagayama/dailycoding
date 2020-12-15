attribute vec3 aPosition;
attribute vec3 aNormal;
attribute vec2 aTexCoord;

uniform vec3 uLightingDirection[5]; // ☆平行光源の方向ベクトル

uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;
uniform mat3 uNormalMatrix;

varying vec3 vVertexNormal;
varying highp vec2 vVertTexCoord;

varying vec3 vLightDirection; // ☆平行光源の方向ベクトルの逆

void main(void) {
  vec4 positionVec4 = vec4(aPosition, 1.0);
  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;
  vVertexNormal = normalize(vec3( uNormalMatrix * aNormal ));
  vVertTexCoord = aTexCoord;
  vLightDirection = -uLightingDirection[0]; // ☆平行光源の方向ベクトルをフラグメントシェーダーに渡す
}