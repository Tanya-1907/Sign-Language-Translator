import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

function Model() {

  const group = useRef();
  const { scene } = useGLTF("/avatar.glb");

  useEffect(() => {

    const box = new THREE.Box3().setFromObject(scene);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());

    // ⭐ CENTER MODEL
    scene.position.x -= center.x;
    scene.position.y -= center.y;
    scene.position.z -= center.z;

    // ⭐ AUTO SCALE (VERY IMPORTANT)
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = 2.5 / maxDim;
    scene.scale.setScalar(scale);

  }, [scene]);

  return <primitive ref={group} object={scene} />;

}

export default function Avatar() {

  return (

    <Canvas
      camera={{ position: [0, 1.5, 4], fov: 40 }}
      style={{ width: "100%", height: "100%" }}
    >

      <ambientLight intensity={1.4} />
      <directionalLight position={[5,5,5]} intensity={1.2} />

      <Model />

      <OrbitControls
        enablePan={false}
        enableZoom={true}
        enableRotate={true}
        minDistance={2}
        maxDistance={6}
      />

    </Canvas>

  );

}