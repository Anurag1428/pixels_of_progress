/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 public/models/Monitor.glb -o src/components/Monitor.jsx -r public
Monitor by Poly by Google [CC-BY] (https://creativecommons.org/licenses/by/3.0/) via Poly Pizza (https://poly.pizza/m/5qZ5IaClHHw)
*/

import { useGLTF } from "@react-three/drei";
import React from "react";

export function Monitor(props) {
  const { nodes, materials } = useGLTF("/models/Monitor.glb");

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.iMac.geometry} material={materials.Mat} />
    </group>
  );
}

useGLTF.preload("/models/Monitor.glb");
// Monitor display improvements
