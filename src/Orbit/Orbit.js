import { Canvas } from '@react-three/fiber';
import { useRef } from 'react';
import BoxTest from '../components/BoxTest';
import CameraControls from '../components/CameraControls';
import OrbitControls from '../components/OrbitControls';
import postTaxIncome from '../postTaxIncome';
import Skybox from './Skybox';
import Spheres from './Spheres';

const near = 1 * 10 ** 4;
const far = 1 * 10 ** 12;
const show = {
  CameraControls: false,
  Spheres: true,
  BoxTest: false,
  Sphere: false,
};
const cameraDefaultPosition = [near * 2, near * 2, near * 3];

const spheres = postTaxIncome.map(({ percentile, disposableIncome }) => ({
  name: percentile,
  size: disposableIncome,
}));

const Visualisation = () => {
  const camera = useRef();
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
      {show.CameraControls && (
        <CameraControls
          cameraDefaultPosition={[cameraDefaultPosition]}
          camera={camera}
        />
      )}
    </>
  );
};

export default Visualisation;
