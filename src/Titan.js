import { Canvas, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import { CubeTextureLoader } from 'three';
import OrbitControls from './OrbitControls';
// import Skybox from './Skybox';

const Skybox = () => {
  const { scene } = useThree();
  scene.background = new CubeTextureLoader().load([
    '/images/titanSkybox/gradient1024.png',
    '/images/titanSkybox/gradient1024.png',
    '/images/titanSkybox/dark1024.png',
    '/images/titanSkybox/light1024.png',
    '/images/titanSkybox/gradient1024.png',
    '/images/titanSkybox/gradient1024.png',
  ]);
  return null;
};

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
