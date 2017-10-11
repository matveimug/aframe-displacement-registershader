/* global AFRAME, THREE */

const glsl = require('glslify');
const vertexShader = glsl.file('../shaders/vertex.glsl');
const fragmentShader = glsl.file('../shaders/fragment.glsl');

AFRAME.registerShader('displacement', {
  schema: {
    time1000: {type:'time', is:'uniform'}
  },
  vertexShader: vertexShader,
  fragmentShader: fragmentShader
});

