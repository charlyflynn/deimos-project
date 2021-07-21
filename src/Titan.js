import { Canvas } from '@react-three/fiber';
import { useRef } from 'react';
import OrbitControls from './OrbitControls';
import Skybox from './Skybox';

const Visualisation = () => {
  const camera = useRef();
  return (
    <>
      <Canvas
        camera={{
          ref: camera,
          position: [0, 0, 45],
          rotation: [0, 0, 0],
          near: 1,
          far: 1000,
        }}
      >
        <OrbitControls />
        <Skybox />
        <pointLight intensity="1" />
        <ambientLight intensity="0.01" />
        <axesHelper args={[10]} />
      </Canvas>
    </>
  );
};

export default Visualisation;
