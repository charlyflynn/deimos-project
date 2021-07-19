import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import { TextureLoader } from 'three';

const Sphere = ({ args, orbitRadius }) => {
  const mesh = useRef();
  const { clock } = useThree();

  const omega = (1 / (2 * Math.PI)) * Math.random();
  const phi = 2 * Math.PI * Math.random();

  useFrame(() => {
    const t = clock.getElapsedTime();
    mesh.current.position.x = orbitRadius * Math.cos(omega * t - phi);
    mesh.current.rotation.y = clock.getElapsedTime() / 3;
    mesh.current.position.z = orbitRadius * Math.sin(omega * t - phi);
  });

  console.log('sphere', args);
  return (
    <mesh ref={mesh}>
      <sphereGeometry attach="geometry" args={args} />
      <meshLambertMaterial
        attach="material"
        map={new TextureLoader().load('/images/mars.jpeg')}
      />
    </mesh>
  );
};

const Spheres = ({ spheres }) => {
  return spheres.map(({ name, size }, i) => {
    return (
      <Sphere
        key={name}
        args={[size, 35, 35]}
        position={[0, 0, 0]}
        orbitRadius={(i + 1) * size * 3}
      />
    );
  });
};

Spheres.Sphere = Sphere;

export default Spheres;
