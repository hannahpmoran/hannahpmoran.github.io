// src/GradientBackground.js
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const GradientBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    // Create geometry and material for the gradient
    const geometry = new THREE.PlaneGeometry(2, 2, 1, 1);
    const uniforms = {
      u_time: { type: 'f', value: 1.0 },
      u_resolution: { type: 'v2', value: new THREE.Vector2() },
      u_mouse: { type: 'v2', value: new THREE.Vector2() }
    };

    const material = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: `
        void main() {
          gl_Position = vec4( position, 1.0 );
        }
      `,
      fragmentShader: `
        uniform float u_time;
        uniform vec2 u_resolution;
        uniform vec2 u_mouse;

        void main() {
          vec2 st = gl_FragCoord.xy / u_resolution;
          vec3 color = vec3(15); // Light grey color

          float dist = distance(st, u_mouse / u_resolution);
          color = mix(vec3(1.0), vec3(0.9), dist); // Mix between white and light grey

          gl_FragColor = vec4(color, 1.0);
        }
      `
    });

    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    camera.position.z = 1;

    // Animation loop
    const animate = function () {
      requestAnimationFrame(animate);

      uniforms.u_time.value += 0.5;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      const { innerWidth, innerHeight } = window;
      renderer.setSize(innerWidth, innerHeight);
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
      uniforms.u_resolution.value.set(innerWidth, innerHeight);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Handle mouse movement
    const handleMouseMove = (event) => {
      uniforms.u_mouse.value.x = event.clientX;
      uniforms.u_mouse.value.y = window.innerHeight - event.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="canvas-container" ref={mountRef} />;
};

export default GradientBackground;
