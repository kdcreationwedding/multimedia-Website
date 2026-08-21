'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function KDOrbitCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);
  const scrollProgressRef = useRef<number>(0);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x060608, 0.015);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 14);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // --- Lighting (Cinematic Studio Setup) ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfffae6, 3.5);
    keyLight.position.set(10, 15, 12);
    scene.add(keyLight);

    const goldRimLight = new THREE.PointLight(0xd4af37, 5, 30);
    goldRimLight.position.set(-12, -8, -5);
    scene.add(goldRimLight);

    const blueRimLight = new THREE.PointLight(0x475569, 3, 30);
    blueRimLight.position.set(12, 10, -8);
    scene.add(blueRimLight);

    // Interactive cursor follow light
    const cursorLight = new THREE.PointLight(0xfff5cb, 4, 15);
    cursorLight.position.set(0, 0, 8);
    scene.add(cursorLight);

    // --- Materials ---
    // Metallic Gold Orbit Material
    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.95,
      roughness: 0.15,
      envMapIntensity: 2.5,
    });

    // Dark Chrome / Obsidian Metal
    const chromeMaterial = new THREE.MeshStandardMaterial({
      color: 0x121218,
      metalness: 0.9,
      roughness: 0.2,
    });

    // Optical Glass Material (Camera Lens Elements)
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.1,
      roughness: 0.05,
      transmission: 0.92,
      ior: 1.52,
      thickness: 1.2,
      transparent: true,
      opacity: 0.85,
    });

    // Gold Glowing Energy Ring Inner Mesh
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0xffe885,
      wireframe: false,
    });

    // --- 3D OBJECT 1: Cinematic Camera Lens ---
    const lensGroup = new THREE.Group();

    // Outer Metallic Barrel
    const barrelGeo = new THREE.CylinderGeometry(2.8, 2.6, 2.2, 64, 1, true);
    const barrelMesh = new THREE.Mesh(barrelGeo, chromeMaterial);
    barrelMesh.rotation.x = Math.PI / 2;
    lensGroup.add(barrelMesh);

    // Gold Aperture Knurled Ring
    const ringGeo = new THREE.TorusGeometry(2.85, 0.08, 16, 100);
    const goldRingMesh = new THREE.Mesh(ringGeo, goldMaterial);
    lensGroup.add(goldRingMesh);

    // Lens Glass Element 1 (Front Convex Lens)
    const glassGeo1 = new THREE.SphereGeometry(2.5, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.35);
    const glassMesh1 = new THREE.Mesh(glassGeo1, glassMaterial);
    glassMesh1.position.z = 0.5;
    lensGroup.add(glassMesh1);

    // Lens Glass Element 2 (Inner Lens Core)
    const glassGeo2 = new THREE.CylinderGeometry(2.2, 2.2, 0.3, 32);
    const glassMesh2 = new THREE.Mesh(glassGeo2, glassMaterial);
    glassMesh2.rotation.x = Math.PI / 2;
    glassMesh2.position.z = -0.2;
    lensGroup.add(glassMesh2);

    // Aperture Blades (8 Segment Metallic Fan inside)
    const apertureGroup = new THREE.Group();
    for (let i = 0; i < 8; i++) {
      const bladeGeo = new THREE.BufferGeometry();
      const angle = (i * Math.PI * 2) / 8;
      const bladeShape = new THREE.Shape();
      bladeShape.moveTo(0, 0);
      bladeShape.lineTo(1.8, 0.4);
      bladeShape.lineTo(1.4, 1.8);
      bladeShape.closePath();
      const bladeExtrude = new THREE.ExtrudeGeometry(bladeShape, { depth: 0.02, bevelEnabled: false });
      const bladeMesh = new THREE.Mesh(bladeExtrude, chromeMaterial);
      bladeMesh.rotation.z = angle;
      apertureGroup.add(bladeMesh);
    }
    apertureGroup.position.z = 0.1;
    lensGroup.add(apertureGroup);

    scene.add(lensGroup);

    // --- SIGNATURE 3D ELEMENT: "THE KD ORBIT" ---
    const orbitGroup = new THREE.Group();

    // Main Refined Metallic Ring
    const orbitGeo = new THREE.TorusGeometry(4.2, 0.14, 32, 128);
    const orbitMesh = new THREE.Mesh(orbitGeo, goldMaterial);
    orbitGroup.add(orbitMesh);

    // Secondary Thin Precision Accent Ring
    const orbitAccentGeo = new THREE.TorusGeometry(4.5, 0.03, 16, 100);
    const orbitAccentMesh = new THREE.Mesh(orbitAccentGeo, goldMaterial);
    orbitGroup.add(orbitAccentMesh);

    // Glowing Inner Plasma Filament
    const glowRingGeo = new THREE.TorusGeometry(4.18, 0.02, 16, 80);
    const glowRingMesh = new THREE.Mesh(glowRingGeo, glowMaterial);
    orbitGroup.add(glowRingMesh);

    scene.add(orbitGroup);

    // --- Ambient Particle Field (Volumetric Studio Atmosphere) ---
    const particlesCount = 350;
    const particlesGeo = new THREE.BufferGeometry();
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 35;
      posArray[i + 1] = (Math.random() - 0.5) * 35;
      posArray[i + 2] = (Math.random() - 0.5) * 25;
    }
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMat = new THREE.PointsMaterial({
      size: 0.04,
      color: 0xd4af37,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
    });
    const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particlesMesh);

    // --- Mouse Parallax & Cursor Tracking ---
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const onMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove);

    // --- ScrollTrigger Integration for Continuous Orbit Journey ---
    const st = ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1.2,
      onUpdate: (self) => {
        scrollProgressRef.current = self.progress;
      },
    });

    // --- Animation & Render Loop ---
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const renderLoop = () => {
      animationFrameId = requestAnimationFrame(renderLoop);
      const elapsedTime = clock.getElapsedTime();

      // Smooth lerp mouse coordinates
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Update cursor light
      cursorLight.position.x = mouseX * 8;
      cursorLight.position.y = mouseY * 8;

      const p = scrollProgressRef.current; // Scroll progress [0..1]

      // --- SECTION 1: HERO (p: 0.0 - 0.15) ---
      // Camera Lens centered, Orbit floats around lens
      if (p <= 0.18) {
        const localP = p / 0.18;
        lensGroup.position.set(mouseX * 0.5, mouseY * 0.5, 0);
        lensGroup.rotation.y = elapsedTime * 0.2 + mouseX * 0.4;
        lensGroup.rotation.x = Math.sin(elapsedTime * 0.3) * 0.1 - mouseY * 0.4;

        orbitGroup.position.set(mouseX * 0.8, mouseY * 0.8, 0);
        orbitGroup.rotation.x = Math.PI / 3 + Math.sin(elapsedTime * 0.5) * 0.2 + mouseY * 0.5;
        orbitGroup.rotation.y = elapsedTime * 0.4 + mouseX * 0.5;
        orbitGroup.rotation.z = Math.cos(elapsedTime * 0.3) * 0.15;
        orbitGroup.scale.setScalar(1.0 - localP * 0.2);
      }
      // --- SECTION 2: ABOUT (p: 0.18 - 0.38) ---
      // Lens shifts left & back, Orbit glides behind typography
      else if (p > 0.18 && p <= 0.38) {
        const localP = (p - 0.18) / 0.2;
        lensGroup.position.x = THREE.MathUtils.lerp(0, -5, localP);
        lensGroup.position.z = THREE.MathUtils.lerp(0, -4, localP);
        lensGroup.rotation.y = elapsedTime * 0.15;

        orbitGroup.position.x = THREE.MathUtils.lerp(0, 1.5, localP);
        orbitGroup.position.y = THREE.MathUtils.lerp(0, 0, localP);
        orbitGroup.position.z = THREE.MathUtils.lerp(0, -2, localP);
        orbitGroup.rotation.x = THREE.MathUtils.lerp(Math.PI / 3, Math.PI / 6, localP);
        orbitGroup.rotation.y = elapsedTime * 0.3;
        orbitGroup.rotation.z = THREE.MathUtils.lerp(0, Math.PI / 4, localP);
        orbitGroup.scale.setScalar(THREE.MathUtils.lerp(0.8, 1.25, localP));
      }
      // --- SECTION 3: SERVICES (p: 0.38 - 0.58) ---
      // Orbit tilts into a spatial radar navigation system
      else if (p > 0.38 && p <= 0.58) {
        const localP = (p - 0.38) / 0.2;
        lensGroup.position.set(-5, 0, -6);

        orbitGroup.position.x = THREE.MathUtils.lerp(1.5, 0, localP);
        orbitGroup.position.y = THREE.MathUtils.lerp(0, -1, localP);
        orbitGroup.position.z = THREE.MathUtils.lerp(-2, 1, localP);
        orbitGroup.rotation.x = THREE.MathUtils.lerp(Math.PI / 6, Math.PI / 2.2, localP);
        orbitGroup.rotation.y = elapsedTime * 0.5;
        orbitGroup.rotation.z = 0;
        orbitGroup.scale.setScalar(THREE.MathUtils.lerp(1.25, 1.6, localP));
      }
      // --- SECTION 4: PORTFOLIO (p: 0.58 - 0.78) ---
      // Orbit frames work in a circular framing ring
      else if (p > 0.58 && p <= 0.78) {
        const localP = (p - 0.58) / 0.2;
        lensGroup.position.set(5, -2, -8);

        orbitGroup.position.x = THREE.MathUtils.lerp(0, -2, localP);
        orbitGroup.position.y = THREE.MathUtils.lerp(-1, 0.5, localP);
        orbitGroup.position.z = THREE.MathUtils.lerp(1, 0, localP);
        orbitGroup.rotation.x = THREE.MathUtils.lerp(Math.PI / 2.2, 0.2, localP);
        orbitGroup.rotation.y = elapsedTime * 0.35;
        orbitGroup.rotation.z = THREE.MathUtils.lerp(0, Math.PI / 3, localP);
        orbitGroup.scale.setScalar(THREE.MathUtils.lerp(1.6, 1.1, localP));
      }
      // --- SECTION 5: PROCESS (p: 0.78 - 0.88) ---
      // Orbit flattens into horizontal metallic timeline track
      else if (p > 0.78 && p <= 0.88) {
        const localP = (p - 0.78) / 0.1;
        lensGroup.position.set(0, 4, -10);

        orbitGroup.position.x = THREE.MathUtils.lerp(-2, 0, localP);
        orbitGroup.position.y = THREE.MathUtils.lerp(0.5, 0, localP);
        orbitGroup.position.z = THREE.MathUtils.lerp(0, -1, localP);
        orbitGroup.rotation.x = THREE.MathUtils.lerp(0.2, Math.PI / 2, localP);
        orbitGroup.rotation.y = 0;
        orbitGroup.rotation.z = THREE.MathUtils.lerp(Math.PI / 3, 0, localP);
        orbitGroup.scale.setScalar(THREE.MathUtils.lerp(1.1, 1.4, localP));
      }
      // --- SECTION 6: CONTACT / CLIMAX (p: 0.88 - 1.0) ---
      // Orbit locks front-facing around the KD identity mark
      else {
        const localP = (p - 0.88) / 0.12;
        lensGroup.position.set(0, 0, -15); // recessed

        orbitGroup.position.x = THREE.MathUtils.lerp(0, 0, localP);
        orbitGroup.position.y = THREE.MathUtils.lerp(0, 0.4, localP);
        orbitGroup.position.z = THREE.MathUtils.lerp(-1, 3.5, localP);
        orbitGroup.rotation.x = THREE.MathUtils.lerp(Math.PI / 2, 0, localP);
        orbitGroup.rotation.y = elapsedTime * 0.2;
        orbitGroup.rotation.z = 0;
        orbitGroup.scale.setScalar(THREE.MathUtils.lerp(1.4, 0.85, localP));
      }

      // Rotate camera lens inner aperture
      apertureGroup.rotation.z = elapsedTime * 0.1;
      particlesMesh.rotation.y = elapsedTime * 0.03;

      renderer.render(scene, camera);
    };

    renderLoop();

    // --- Resize Handler ---
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth || window.innerWidth;
      const newH = container.clientHeight || window.innerHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      st.kill();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      scene.clear();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 w-full h-full"
      style={{ opacity: 0.95 }}
    />
  );
}
