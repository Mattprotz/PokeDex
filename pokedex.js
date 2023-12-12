import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Pokedex(props) {
  const { nodes, materials } = useGLTF("/pokedex.gltf");
  return (
    <group {...props} dispose={null}>
      <group scale={[1, 1, 1.174]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials.Case}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_1.geometry}
          material={materials.Screens}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_2.geometry}
          material={materials.Camera}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_3.geometry}
          material={materials.Button_Red}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_4.geometry}
          material={materials.Button_Yellow}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_5.geometry}
          material={materials.Button_Green}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_6.geometry}
          material={materials.Buttons_Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_7.geometry}
          material={materials.Buttons_Blue}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_8.geometry}
          material={materials.White}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/pokedex.gltf");