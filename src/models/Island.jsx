/* eslint-disable react/no-unknown-property */

import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three"

import islandScene from "../assets/3d/island.glb";

const Island = (props) => {

  const islandRef = useRef();
  const { nodes, materials } = useGLTF(islandScene);

  return (
    <a.group ref={islandRef} {...props} >

        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials["11112_sheet_Material__25"]}
        />

        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials["11112_sheet_Material__25"]}
        />

        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials["11112_sheet_Material__37"]}
        />

        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials["11112_sheet_Material__37"]}
        />

    </a.group>
  );
}

export default Island;
