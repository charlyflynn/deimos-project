import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import { TextureLoader } from 'three';
const orbitRadius = 50;
const Saturn = ({ position }) => {
  const mesh = useRef();
  const { clock } = useThree();

  useFrame(() => {
    const t = clock.getElapsedTime();
    mesh.current.rotation.y = clock.getElapsedTime() / 3;
    mesh.current.position.x = orbitRadius * Math.sin(t * 0.1);
    mesh.current.position.y = orbitRadius * Math.cos(t * 0.1);
    mesh.current.position.z = orbitRadius * Math.sin(t * 0.1);
  });

  return (
    <mesh ref={mesh} position={position} rotation={[35, 35, 0]}>
      <sphereGeometry attach="geometry" args={[10, 35, 35]} />
      <meshLambertMaterial
        attach="material"
        map={new TextureLoader().load('/titan/saturn.png')}
      />
    </mesh>
  );
};

export default Saturn;
