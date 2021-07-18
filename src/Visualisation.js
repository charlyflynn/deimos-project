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

const SetCamera = ({ cameraRef }) => {
  useThree(({ camera }) => {
    // const [x, y, z] = cameraDefaultPosition;

    const [x, y, z] = [-50, -50, -50];
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
    .map(({ percentile, disposableIncome }, i) => (
      <Sphere
        key={percentile}
        args={[disposableIncome / divisor, 35, 35]}
        position={[-40 + i * 9, 0, 0]}
        i={i}
      />
    ))
    .slice(0, 8);
};

const Visualisation = () => {
  const camera = useRef();
  // const { size } = useThree();
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
        <SetCamera cameraRef={camera} />
        <perspectiveCamera
          ref={camera}
          // aspect={size.width / size.height}
          // radius={(size.width + size.height) / 4}
          // onUpdate={(self) => self.updateProjectionMatrix()}
        />
        <Skybox />
        <pointLight position={[0, 0, 100]} intensity="0.9" />
        <ambientLight intensity="0.02" />
        <Spheres />
        {false && <Box />}
        <axesHelper args={[20]} />
      </Canvas>
      {false && (
        <CameraControls
          camera={camera}
          cameraDefaultPosition={cameraDefaultPosition}
        />
      )}
    </>
  );
};

export default Visualisation;
