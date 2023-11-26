/* eslint-disable react/no-unknown-property */

import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three"

import islandScene from "../assets/3d/island.glb";

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
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
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
