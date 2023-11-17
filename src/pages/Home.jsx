import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import  Loader  from '../components/Loader';
import  Island  from '../models/Island';
import  Sky  from '../models/Sky';
import  Bird  from '../models/Bird';

const Home = () => {

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

  const [islandScale, islandPosition, islandRotation] = custom();

  return (

    <section className='w-full h-screen relative' >

      {/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        Hello There
      </div> */}

      <Canvas
        camera={{ near: 0.1, far: 1000}}
        className='w-full h-screen bg-transparent'
      >
        <Suspense fallback={<Loader />}>
          <ambientLight />
          <pointLight />
          <directionalLight />
          <hemisphereLight />

          <Bird />

          <Sky />

          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
          />
        </Suspense>
      </Canvas>

    </section>

  )
}

export default Home
