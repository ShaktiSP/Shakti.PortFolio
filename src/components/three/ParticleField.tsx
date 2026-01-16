import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Galaxy spiral particles
function GalaxySpiral() {
  const ref = useRef<THREE.Points>(null);
  
  const { positions, colors } = useMemo(() => {
    const count = 8000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    const colorInside = new THREE.Color('#ff6030');
    const colorOutside = new THREE.Color('#1b3984');
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const radius = Math.random() * 12;
      const spinAngle = radius * 2;
      const branchAngle = ((i % 3) / 3) * Math.PI * 2;
      
      const randomX = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.5 * radius;
      const randomY = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.3;
      const randomZ = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.5 * radius;
      
      positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
      positions[i3 + 1] = randomY;
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;
      
      const mixedColor = colorInside.clone();
      mixedColor.lerp(colorOutside, radius / 12);
      
      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }
    
    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={0.04}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

// Floating neon particles
function NeonParticles() {
  const ref = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.02;
      ref.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00ffff"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

// Pulsing energy rings
function EnergyRings() {
  const ref = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.1;
      ref.current.rotation.z = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={ref}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[4, 0.02, 16, 100]} />
        <meshBasicMaterial color="#ff00ff" transparent opacity={0.5} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, Math.PI / 4]}>
        <torusGeometry args={[5, 0.015, 16, 100]} />
        <meshBasicMaterial color="#00ffff" transparent opacity={0.4} />
      </mesh>
      <mesh rotation={[Math.PI / 3, 0, Math.PI / 6]}>
        <torusGeometry args={[6, 0.01, 16, 100]} />
        <meshBasicMaterial color="#ff6600" transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

// Nebula cloud effect
function NebulaCloud() {
  const ref = useRef<THREE.Points>(null);
  
  const { positions, colors } = useMemo(() => {
    const count = 3000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    const nebulaColors = [
      new THREE.Color('#8b5cf6'),
      new THREE.Color('#ec4899'),
      new THREE.Color('#06b6d4'),
      new THREE.Color('#f97316'),
    ];
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 8 + Math.random() * 10;
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.3;
      positions[i3 + 2] = radius * Math.cos(phi);
      
      const color = nebulaColors[Math.floor(Math.random() * nebulaColors.length)];
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }
    
    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.01;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.1;
    }
  });

  return (
    <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={0.08}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.6}
      />
    </Points>
  );
}

// Grid plane with movement
function GridPlane() {
  const ref = useRef<THREE.GridHelper>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.z = (state.clock.elapsedTime * 0.5) % 2;
    }
  });

  return (
    <gridHelper
      ref={ref}
      args={[50, 50, '#ff00ff', '#00ffff']}
      position={[0, -5, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

export default function ParticleField() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 2, 8], fov: 75 }}>
        <fog attach="fog" args={['#050510', 5, 35]} />
        <ambientLight intensity={0.3} />
        <pointLight position={[0, 0, 0]} color="#ff00ff" intensity={2} distance={20} />
        <pointLight position={[5, 5, 5]} color="#00ffff" intensity={1} distance={15} />
        
        {/* Background stars */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        {/* Galaxy spiral */}
        <GalaxySpiral />
        
        {/* Nebula clouds */}
        <NebulaCloud />
        
        {/* Floating neon particles */}
        <NeonParticles />
        
        {/* Energy rings */}
        <EnergyRings />
        
        {/* Gaming grid */}
        <GridPlane />
      </Canvas>
      
      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/50 pointer-events-none" />
    </div>
  );
}
