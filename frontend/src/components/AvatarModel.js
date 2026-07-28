import React from "react";
import { useGLTF } from "@react-three/drei";

// Temporary 3D avatar (replace hand_avatar.glb with your model)
export default function AvatarModel({ animation }) {
  const { scene } = useGLTF("/hand_avatar.glb"); // Place your file in public folder

  // Future: you can trigger gestures or animations here based on `animation` text
  return <primitive object={scene} scale={1.5} position={[0, -1, 0]} />;
}
