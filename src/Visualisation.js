import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
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
    mesh.current.position.y = Math.sin(i + clock.getElapsedTime());
  });

  return (
    <mesh ref={mesh} position={position}>
      <sphereGeometry attach="geometry" args={args} />
      <meshPhongMaterial attach="material" color="goldenrod" />
    </mesh>
  );
};

const CameraControls = () => {
  const controls = useRef();
  const {
    camera,
    gl: { domElement },
  } = useThree();
  useFrame(() => controls.current.update());
  return <orbitControls ref={controls} args={[camera, domElement]} />;
};

const Spheres = () => {
  return postTaxIncome
    .map(({ disposableIncome }, i) => (
      <Sphere
        args={[disposableIncome / divisor, 35, 35]}
        position={[i * 5.5, 0, 0]}
        i={i}
      />
    ))
    .slice(0, 5);
};

const Visualisation = () => {
  return (
    <Container>
      <Canvas
        camera={{
          position: [0, 0, 45],
          rotation: [0, 0, 0],
          near: 0.1,
          far: 100,
        }}
      >
        <clock />
        <axesHelper args={[20]} />
        <color attach="background" args={[0x888888]} intensity={0.01} />
        <group position={[0, 2, 0]}>
          <Spheres />
        </group>
        <Box />
        <CameraControls />
        <pointLight position={[0, 0, 100]} intensity="0.9" />
        <ambientLight color="goldenrod" intensity="0.5" />
      </Canvas>
    </Container>
  );
};

export default Visualisation;
