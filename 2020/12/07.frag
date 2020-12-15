precision mediump float;

uniform vec4 uMaterialColor; // fill()で指定された色（RGBA）

varying vec3 vVertexNormal; // 座標変換後の法線ベクトル
varying vec3 vLightDirection; // ☆平行光源の方向ベクトルの逆

void main(void) {
  float intensity = max(0.0, dot(normalize(vLightDirection), normalize(vVertexNormal)));

  vec4 color;
  if (intensity > 0.96) {
    color = vec4(vec3(1.0), 1.0);
  } else if (intensity > 0.5) {
    color = vec4(vec3(0.6), 1.0);
  } else if (intensity > 0.25) {
    color = vec4(vec3(0.4), 1.0);
  } else {
    color = vec4(vec3(0.2), 1.0);
  }

  gl_FragColor = uMaterialColor * color;
}