/* global AFRAME, THREE */

const glsl = require('glslify');
const otherModule = require('./other');
otherModule();
const vertexShader = glsl('./shaders/vertex.glsl');
const fragmentShader = glsl.file('./shaders/fragment.glsl');

AFRAME.registerComponent('material-displacement', {
  /**
   * Creates a new THREE.ShaderMaterial using the two shaders defined
   * in vertex.glsl and fragment.glsl.
   */
  init: function () {
    this.material  = new THREE.ShaderMaterial({
      uniforms: {time: { value: 0.0 }},
      vertexShader,
      fragmentShader
    });
    
    this.el.addEventListener('model-loaded', this.update.bind(this));
  },
  

  /**
   * Apply the material to the current entity.
   */
  update: function () {
    const mesh = this.el.getObject3D('mesh');
    if (mesh) {
      mesh.material = this.material;
    }
  },

  /**
   * On each frame, update the 'time' uniform in the shaders.
   */
  tick: function (t) {
    this.material.uniforms.time.value = t / 1000;
  }
  
})
