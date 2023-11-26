import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import  Loader  from '../components/Loader';
import  Island  from '../models/Island';
import  Sky  from '../models/Sky';
import  Bird  from '../models/Bird';
import  Plane  from '../models/Plane';

const Home = () => {

  const [CurrentStage, setCurrentStage] = useState(1)
  const [isRotating, setIsRotating] = useState(false);

  const custom = () => {
    let screenScale = null;
    let screenPosition = [4, -11.5, -43];
    let rotation = [-1.45, 0, 3.25];

    if(window.innerWidth < 768) {
      screenScale= [0.5, 0.5, 0.5];
      screenPosition= [0, -6.5, -43];
    } else {
      screenScale= [0.25, 0.25, 0.25];
    }
    return [screenScale, screenPosition, rotation]
  }

  const plane = () => {
    let screenScale, screenPosition ;

    if(window.innerWidth < 768) {
      screenScale= [1.5, 1.5, 1.5];
      screenPosition= [0, -1.5, 0];
    } else {
      screenScale= [3, 3, 3];
      screenPosition= [0, -4, -4];
    }
    return [screenScale, screenPosition]
  }

  const [islandScale, islandPosition, islandRotation] = custom();
  const [ planeScale, planePosition ] = plane();

  return (

    <section className='w-full h-screen relative' >

      {/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        Hello There
      </div> */}

      <Canvas
        camera={{ near: 0.1, far: 1000}}
        className='w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-grab" }'
      >
        <Suspense fallback={<Loader />}>
          <ambientLight />
          <pointLight />
          <directionalLight />
          <hemisphereLight />

          <Bird />

          <Sky
            isRotating={isRotating}
          />

          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />

          <Plane
            planeScale={planeScale}
            planePosition={planePosition}
            isRotating={isRotating}
            rotation={[0, 20, 0]}
          />

        </Suspense>
      </Canvas>

    </section>

  )
}

export default Home
