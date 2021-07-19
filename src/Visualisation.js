import { Canvas, useThree } from '@react-three/fiber';
import { useRef, useState } from 'react';
import BoxTest from './BoxTest';
import CameraControls from './CameraControls';
import OrbitControls from './OrbitControls';
import postTaxIncome from './postTaxIncome';
import Skybox from './Skybox';
import Spheres from './Spheres';

const near = 1 * 10 ** 4;
const far = 1 * 10 ** 12;
const show = { Spheres: true, BoxTest: false, Sphere: false };
const cameraDefaultPosition = [near * 2, near * 2, near * 3];

const SetCamera = ({ position }) => {
  useThree(({ camera }) => {
    const [x, y, z] = position;
    camera.position.set(x, y, z);
  });
  return null;
};

const spheres = postTaxIncome.map(({ percentile, disposableIncome }) => ({
  name: percentile,
  size: disposableIncome,
}));

const Visualisation = () => {
  const camera = useRef();
  const [cameraPosition, setCameraPosition] = useState(cameraDefaultPosition);
  return (
    <>
      <Canvas
        camera={{
          ref: camera,
          position: cameraDefaultPosition,
          rotation: [0, 0, 0],
          near,
          far,
        }}
      >
        <OrbitControls />
        <SetCamera position={cameraPosition} />
        <Skybox />
        <pointLight intensity="1" />
        <ambientLight intensity="0.01" />
        {show.Spheres && <Spheres spheres={spheres} />}
        {show.Sphere && (
          <Spheres.Sphere args={[near * 2, 35, 35]} position={[0, 0, 0]} />
        )}
        {show.BoxTest && (
          <BoxTest args={[near * 1.5, near * 1.5, near * 1.5]} />
        )}
        <axesHelper args={[near * 1.4]} />
      </Canvas>
      <CameraControls
        cameraDefaultPosition={[cameraDefaultPosition]}
        setCameraPosition={setCameraPosition}
        // camera={camera}
      />
    </>
  );
};

export default Visualisation;
