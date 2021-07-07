import { Canvas, extend, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import styled from 'styled-components';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import postTaxIncome from './postTaxIncome';

extend({ OrbitControls });

const Container = styled.div`
  width: min(100vh, 100vw);
  height: min(100vh, 100vw);
`;
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
    <mesh ref={mesh} position={[0, 2, 0]}>
      <boxGeometry args={[1, 1, 1]} attach="geometry" />
      <meshPhongMaterial attach="material" color="indigo" />
    </mesh>
  );
};

const Sphere = ({ args, position }) => {
  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.x =
      mesh.current.rotation.y =
      mesh.current.rotation.z +=
        0.04;
  });

  return (
    <mesh ref={mesh} position={position}>
      <sphereGeometry attach="geometry" args={args} />
      <meshPhongMaterial attach="material" color="0x009944" />
    </mesh>
  );
};

const Spheres = () => {
  return postTaxIncome.map(({ disposableIncome }, i) => (
    <Sphere
      args={[disposableIncome / divisor, 35, 35]}
      position={[i * 2, i * 2, i * 2]}
    />
  ));
};

const Visualisation = () => {
  return (
    <Container>
      <Canvas
        camera={{
          position: [0, 0, 20],
          near: 0.1,
          far: 1000,
        }}
      >
        <group>
          <Spheres />
        </group>
        <pointLight position={[0, 0, 100]} intensity="0.9" />
        <ambientLight color="goldenrod" intensity="0.5" />
      </Canvas>
    </Container>
  );
};

export default Visualisation;
