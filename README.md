Writing a displacement shader in A-Frame
=========================

This example shows how to write custom shaders (GLSL) and use them to create effects in A-Frame / three.js / WebGL.

Click `Show` in the header to see the demo.

Features
------------

- A basic webserver defined by `server.js`
- Shaders are compiled by `glslify`. Compilation isn't necessary, but makes it possible to import helper functions through NPM.
- The shader `displacement` is defined by `index.js`, and used by specifying the `shader` property of the `material` component in the entity declaration.

Credit
------------

This example is based closely on an excellent article by [@thespite](https://twitter.com/thespite), [Vertex displacement with a noise function using GLSL and three.js](https://www.clicktorelease.com/blog/vertex-displacement-noise-3d-webgl-glsl-three-js/).

