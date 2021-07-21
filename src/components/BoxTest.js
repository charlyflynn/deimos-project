import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const BoxTest = ({ args }) => {
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
      <boxGeometry args={args} attach="geometry" />
      <meshPhongMaterial attach="material" color="blue" />
    </mesh>
  );
};

export default BoxTest;
