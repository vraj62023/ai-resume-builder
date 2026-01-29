'use client';

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function FiberBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x0a0a0a, 1);

    containerRef.current.appendChild(renderer.domElement);

    camera.position.z = 5;

    // Create fiber geometry (particles)
    const geometry = new THREE.BufferGeometry();
    const vertexCount = 500;
    const positions = new Float32Array(vertexCount * 3);

    for (let i = 0; i < vertexCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 20;
      positions[i + 1] = (Math.random() - 0.5) * 20;
      positions[i + 2] = (Math.random() - 0.5) * 20;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // Particle material
    const material = new THREE.PointsMaterial({
      color: 0x4c1d95,
      size: 0.02,
      sizeAttenuation: true,
      opacity: 0.7,
      transparent: true,
      fog: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Add lines for fiber effect
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(vertexCount * 3);

    for (let i = 0; i < vertexCount * 3; i += 3) {
      linePositions[i] = (Math.random() - 0.5) * 20;
      linePositions[i + 1] = (Math.random() - 0.5) * 20;
      linePositions[i + 2] = (Math.random() - 0.5) * 20;
    }

    lineGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(linePositions, 3)
    );

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x6d28d9,
      linewidth: 1,
      opacity: 0.3,
      transparent: true,
      fog: false,
    });

    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // Animation loop
    let animationId;

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // Rotate particles
      particles.rotation.x += 0.001;
      particles.rotation.y += 0.002;

      // Update particle positions for wave effect
      const positionAttribute = geometry.getAttribute("position");
      const posArray = positionAttribute.array;

      for (let i = 0; i < posArray.length; i += 3) {
        const z = posArray[i + 2];
        posArray[i + 2] =
          z + Math.sin((Date.now() * 0.0001 + i) * 0.1) * 0.02;
      }

      positionAttribute.needsUpdate = true;

      // Rotate lines
      lines.rotation.x += 0.0005;
      lines.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);

      // Cleanup
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();

      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 -z-10" />;
}
