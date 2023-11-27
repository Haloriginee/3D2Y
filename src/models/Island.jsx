/* eslint-disable react/no-unknown-property */

import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three"

import islandScene from "../assets/3d/island4.glb";

const Island = ({ isRotating, setIsRotating, setCurrentStage ,...props }) => {

  const islandRef = useRef();

  const { gl, viewport } = useThree();

  const { nodes, materials } = useGLTF(islandScene);

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);

  const dampingFactor = 0.95;

  const handleDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    lastX.current = clientX;
  }

  const handleUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  }

  const handleMove = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if(isRotating) {

      const clientX = e.touches ? e.touches[0].clientX : e.clientX;

      const delta =(clientX - lastX.current) / viewport.width;

      islandRef.current.rotation.z += delta * 0.01 * Math.PI;

      lastX.current = clientX;

      rotationSpeed.current = delta * 0.01 * Math.PI;

    }
  }

  const keyDown = (e) => {

    if(e.key === "ArrowLeft") {

      if(!isRotating) setIsRotating(true);
      islandRef.current.rotation.z += 0.01 * Math.PI;

    } else if(e.key === "ArrowRight") {

      if(!isRotating) setIsRotating(true);
      islandRef.current.rotation.z -= 0.01 * Math.PI;

    }
  }

  const keyUp = (e) => {

    if(e.key === "ArrowLeft" || e.key === "ArrowRight") {

      setIsRotating(false);

    }

  }

  useFrame(() => {

    if(!isRotating) {

      rotationSpeed.current *= dampingFactor;

      if(Math.abs(rotationSpeed.current) < 0.001) {

        rotationSpeed.current = 0;

      }

      islandRef.current.rotation.z += rotationSpeed.current;

    } else {

      const rotation = islandRef.current.rotation.z; //here

      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // Set the current stage based on the island's orientation
      switch (true) {

        case normalizedRotation >= 5 && normalizedRotation <= 5.5:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 1.75 && normalizedRotation <= 2.1:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 3.9 && normalizedRotation <= 4.4:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }

    }

  })

  useEffect(() => {

    const canvas = gl.domElement;

    canvas.addEventListener("pointerdown", handleDown);
    canvas.addEventListener("pointerup", handleUp);
    canvas.addEventListener("pointermove", handleMove);
    document.addEventListener("keydown", keyDown);
    document.addEventListener("keyup", keyUp);

    return () => {

      canvas.removeEventListener("pointerdown", handleDown);
      canvas.removeEventListener("pointerup", handleUp);
      canvas.removeEventListener("pointermove", handleMove);
      document.removeEventListener("keydown", keyDown);
      document.addEventListener("keyup", keyUp);
    }

  }, [ gl, handleDown, handleUp, handleMove ])



  return (
    <a.group ref={islandRef} {...props} >

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Clouds_Clouds_0.geometry}
        material={materials.Clouds}
        scale={2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.hammock_hammock_0.geometry}
        material={materials.hammock}
        position={[180.509, 1151.676, 5904.325]}
        scale={2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tequila_Bottle_Tequila_Bottle_0.geometry}
        material={materials.Tequila_Bottle}
        position={[3492.547, 1112.371, 3620.925]}
        scale={2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.skeleton_skeleton_0.geometry}
        material={materials.skeleton}
        position={[3541.67, 1110.094, 3568.021]}
        scale={2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pyramid_Pyramid_0.geometry}
        material={materials.Pyramid}
        scale={2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Island_Grass_Island_Grass_0.geometry}
        material={materials.Island_Grass}
        scale={2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shrubbery_shrubbery_0.geometry}
        material={materials.shrubbery}
        scale={2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lava_bubble_Lava_bubble_0.geometry}
        material={materials.Lava_bubble}
        scale={2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Volcanic_lava_Volcanic_lava_0.geometry}
        material={materials.Volcanic_lava}
        scale={2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Palm_tree_2_Palm_tree_2_0.geometry}
        material={materials.Palm_tree_2}
        scale={2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Palm_tree_1_Palm_tree_1_0.geometry}
        material={materials.Palm_tree_1}
        scale={2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Volacano_Sand_Volacano_Sand_0.geometry}
        material={materials.Volacano_Sand}
        scale={2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ocean_Ocean_0.geometry}
        material={materials.Ocean}
        scale={2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Volcano_Grass_Volcano_Grass_0.geometry}
        material={materials.Volcano_Grass}
        scale={2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Volcano_Base_Volcano_Base_0.geometry}
        material={materials.Volcano_Base}
        scale={2}
      />

    </a.group>
  );
}

export default Island;
