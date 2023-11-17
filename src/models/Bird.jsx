import React from 'react';

import birdScene from "../assets/3d/bird.glb";
import { useGLTF } from '@react-three/drei';

const Bird = () => {

  const { scene, animations } = useGLTF(birdScene);

  return (

    <mesh scale={[0.003, 0.003, 0.003]} position={[-5, 2, 1]}>
      <primitive object={scene} />
    </mesh>

  )
}

export default Bird
