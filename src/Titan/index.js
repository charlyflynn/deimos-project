import { Canvas, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import { CubeTextureLoader } from 'three';
import OrbitControls from '../components/OrbitControls';
import Saturn from './Saturn';
import Titan from './Titan';

const Skybox = () => {
  const { scene } = useThree();
  scene.background = new CubeTextureLoader().load([
    '/titan/skybox/gradient1024.png',
    '/titan/skybox/gradient1024.png',
    '/titan/skybox/dark1024.png',
    '/titan/skybox/light1024.png',
    '/titan/skybox/gradient1024.png',
    '/titan/skybox/gradient1024.png',
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
          position: [0, 20, 100],
          rotation: [0, 0, 0],
          near: 1,
          far: 1000,
        }}
      >
        <Titan />
        <Saturn position={[15, 25, -45]} />
        <OrbitControls />
        <Skybox />
        <pointLight intensity="1" position={[70, 40, -45]} />
        <ambientLight intensity="0.05" />
        <axesHelper args={[10]} />
      </Canvas>
    </>
  );
};

export default Visualisation;
