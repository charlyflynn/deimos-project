import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
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

const SetCamera = (action) => {
  let position;
  switch (action) {
    case 'reset':
      position = { x: 0, y: 0, z: 45 };
      break;

    default:
  }

  useThree(({ camera }) => {
    const [x, y, z] = cameraDefaultPosition;
    camera.position.set(x, y, z);
  });
  return null;
};

const Sphere = ({ args, position, i }) => {
  const mesh = useRef();
  const { clock } = useThree();

  useFrame(() => {
    mesh.current.position.y = 8 * Math.sin(i + clock.getElapsedTime());
  });

  return (
    <mesh ref={mesh} position={position}>
      <sphereGeometry attach="geometry" args={args} />
      <meshPhongMaterial attach="material" color="goldenrod" />
    </mesh>
  );
};

const Spheres = () => {
  return postTaxIncome
    .map(({ disposableIncome }, i) => (
      <Sphere
        args={[disposableIncome / divisor, 35, 35]}
        position={[-40 + i * 9, 0, 0]}
        i={i}
      />
    ))
    .slice(0, 8);
};

const Visualisation = () => {
  return (
    <>
      <Canvas
        camera={{
          position: cameraDefaultPosition,
          rotation: [0, 0, 0],
          near: 1,
          far: 1000,
        }}
      >
        <OrbitControls />
        <SetCamera />
        <Skybox />
        <pointLight position={[0, 0, 100]} intensity="0.9" />
        <ambientLight intensity="0.02" />
        <Spheres />
        {false && <Box />}
        {/* <axesHelper args={[20]} /> */}
      </Canvas>
      <CameraControls />
    </>
  );
};

export default Visualisation;
