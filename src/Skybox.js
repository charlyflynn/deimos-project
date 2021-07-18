import { useThree } from '@react-three/fiber';
import { CubeTextureLoader } from 'three';

const Skybox = () => {
  const { scene } = useThree();
  const texture = new CubeTextureLoader().load(
    Array(6).fill('/images/stars2048.jpeg')
  );
  scene.background = texture;

  return null;
};

export default Skybox;
