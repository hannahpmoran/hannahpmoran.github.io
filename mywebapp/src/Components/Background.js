import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

function Background() {
  const containerRef = useRef(null);
  let scene, camera, renderer, stars;

  useEffect(() => {
    init();
    animate();

    return () => {
      // Clean up resources
      renderer.dispose();
    };
  }, []);

  function init() {
    const container = document.createElement('div');
    container.classList.add('background-container');
    document.body.appendChild(container);

    const WIDTH = window.innerWidth;
    const HEIGHT = window.innerHeight;

    camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 1, 1000);
    camera.position.z = 1000;

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0E1514);

    starForge();

    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(WIDTH, HEIGHT);
    container.appendChild(renderer.domElement);

    window.addEventListener('resize', onWindowResize, false);
  }

  function animate() {
    requestAnimationFrame(animate);
    render();
  }

  function render() {
    renderer.render(scene, camera);
  }

  function starForge() {
    const starQty = 1000;
    const geometry = new THREE.BufferGeometry();
    const positions = [];

    for (let i = 0; i < starQty; i++) {
      const x = (Math.random() - 0.5) * 1000;
      const y = (Math.random() - 0.5) * 1000;
      const z = (Math.random() - 0.5) * 1000;

      positions.push(x, y, z);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({ color: 0x6B9E96, size: 2 });
    stars = new THREE.Points(geometry, material);
    scene.add(stars);
  }

  function onWindowResize() {
    const container = containerRef.current;
    const WIDTH = window.innerWidth;
    const HEIGHT = window.innerHeight;
    camera.aspect = WIDTH / HEIGHT;
    camera.updateProjectionMatrix();
    renderer.setSize(WIDTH, HEIGHT);
  }

  function animate() {
    requestAnimationFrame(animate);
  
    // Update stars position
    updateStarsPosition();
  
    // Render the scene
    render();
  }

  function updateStarsPosition() {
    const positions = stars.geometry.attributes.position.array;
    const speed = 0.1; // Adjust the speed of movement
  
    for (let i = 0; i < positions.length; i += 3) {
      // Update x, y, and z coordinates of each star
      positions[i] += (Math.random() - 0.5) * speed;
      positions[i + 1] += (Math.random() - 0.5) * speed;
      positions[i + 2] += (Math.random() - 0.5) * speed;
  
      // Reset position if it goes beyond the bounds
      if (Math.abs(positions[i]) > 1000 || Math.abs(positions[i + 1]) > 1000 || Math.abs(positions[i + 2]) > 1000) {
        positions[i] = (Math.random() - 0.5) * 1000;
        positions[i + 1] = (Math.random() - 0.5) * 1000;
        positions[i + 2] = (Math.random() - 0.5) * 1000;
      }
    }
  
    // Update buffer geometry with new positions
    stars.geometry.attributes.position.needsUpdate = true;
  }
  

  return (
    <div className="background-container" ref={containerRef}></div>
  );
}

export default Background;
