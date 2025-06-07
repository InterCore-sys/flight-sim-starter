import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const FlightSimCanvas = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87ceeb); // Sky blue

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 2, 10);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    // Ground (simple green plane)
    const groundGeometry = new THREE.PlaneGeometry(1000, 1000);
    const groundMaterial = new THREE.MeshLambertMaterial({ color: 0x228b22 });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    scene.add(ground);

    // Placeholder plane (simple box and wings)
    const fuselageGeometry = new THREE.BoxGeometry(2, 0.5, 0.5);
    const wingGeometry = new THREE.BoxGeometry(0.1, 0.7, 5);
    const fuselageMaterial = new THREE.MeshStandardMaterial({ color: 0xcccccc });
    const wingMaterial = new THREE.MeshStandardMaterial({ color: 0x5555ff });

    const fuselage = new THREE.Mesh(fuselageGeometry, fuselageMaterial);
    fuselage.position.set(0, 1.2, 0);

    const wing = new THREE.Mesh(wingGeometry, wingMaterial);
    wing.position.set(0, 1.25, 0);

    scene.add(fuselage);
    scene.add(wing);

    // Animation loop
    const animate = () => {
      fuselage.rotation.y += 0.002;
      wing.rotation.y += 0.002;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // Responsive resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100vw', height: '100vh' }} />;
};

export default FlightSimCanvas;