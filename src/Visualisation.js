import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { TextureLoader } from 'three';
import CameraControls from './CameraControls';
import OrbitControls from './OrbitControls';
import postTaxIncome from './postTaxIncome';
import Skybox from './Skybox';

const divisor = postTaxIncome[0].disposableIncome;
const cameraDefaultPosition = [24, 25, 45];

const Box = () => {
  const mesh = useRef();

  useFrame(
    () =>
      (mesh.current.rotation.x =
        mesh.current.rotation.y =
        mesh.current.rotation.z +=
          0.01)
  );

  return (
    <mesh ref={mesh} position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} attach="geometry" />
      <meshPhongMaterial attach="material" color="blue" />
    </mesh>
  );
};

const SetCamera = ({ position }) => {
  useThree(({ camera }) => {
    const [x, y, z] = position;
    camera.position.set(x, y, z);
  });
  return null;
};

const Sphere = ({ args, position, i }) => {
  const mesh = useRef();
  const { clock } = useThree();

  useFrame(() => {
    mesh.current.position.y =
      8 * Math.sin(((i * 0.1 + 1) * clock.getElapsedTime()) / 2);

    mesh.current.rotation.y = clock.getElapsedTime() / 3;
  });

  return (
    <mesh ref={mesh} position={position}>
      <sphereGeometry attach="geometry" args={args} />
      <meshLambertMaterial
        attach="material"
        map={new TextureLoader().load('/images/mars.jpeg')}
      />
    </mesh>
  );
};

const Spheres = () => {
  return postTaxIncome
    .map(({ percentile, disposableIncome }, i) => (
      <Sphere
        key={percentile}
        args={[disposableIncome / divisor, 35, 35]}
        position={[i * 9 - 40, 0, i * 3 * Math.cos(i)]}
        i={i}
      />
    ))
    .slice(0, 8);
};

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
          near: 1,
          far: 1000,
        }}
      >
        <OrbitControls />
        <SetCamera position={cameraPosition} />
        <Skybox />
        <pointLight position={[0, 0, 100]} intensity="0.9" />
        <ambientLight intensity="0.02" />
        <Spheres />
        {false && <Box />}
        <axesHelper args={[20]} />
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
