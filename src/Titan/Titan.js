import { DoubleSide } from 'three';

const Titan = () => {
  return (
    <mesh rotation={[Math.PI * 0.5, 0, 0]}>
      <planeGeometry attach="geometry" args={[90, 90]} />
      <meshBasicMaterial attach="material" color={'teal'} side={DoubleSide} />
    </mesh>
  );
};

export default Titan;
