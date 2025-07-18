/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 public/models/BookCaseWide.glb -o src/components/BookCase.jsx -r public
Bookcase Wide by Kay Lousberg (https://market.pmnd.rs/model/bookcase-wide)
*/

import { useGLTF } from "@react-three/drei";
import React from "react";

export function BookCase(props) {
  const { nodes, materials } = useGLTF("/models/BookCaseWide.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Cube033.geometry}
          material={materials["BrownDark.049"]}
        />
        <mesh
          geometry={nodes.Cube033_1.geometry}
          material={materials["PurpleDark.003"]}
        />
        <mesh
          geometry={nodes.Cube033_2.geometry}
          material={materials["White.034"]}
        />
        <mesh
          geometry={nodes.Cube033_3.geometry}
          material={materials["Metal.080"]}
        />
        <mesh
          geometry={nodes.Cube033_4.geometry}
          material={materials["BlueDark.003"]}
        />
        <mesh
          geometry={nodes.Cube033_5.geometry}
          material={materials["GreenDark.007"]}
        />
        <mesh
          geometry={nodes.Cube033_6.geometry}
          material={materials["WoodDark.005"]}
        />
        <mesh
          geometry={nodes.Cube033_7.geometry}
          material={materials["StoneDark.001"]}
        />
        <mesh
          geometry={nodes.Cube033_8.geometry}
          material={materials["Black.030"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/BookCaseWide.glb");
// BookCase component enhancements
