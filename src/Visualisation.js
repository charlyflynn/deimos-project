import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import CameraControls from './CameraControls';
import OrbitControls from './OrbitControls';
import postTaxIncome from './postTaxIncome';

const divisor = postTaxIncome[0].disposableIncome;

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
          position: [24, 25, 45],
          rotation: [0, 0, 0],
          near: 1,
          far: 1000,
        }}
      >
        <OrbitControls />
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
