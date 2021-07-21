import { useThree } from '@react-three/fiber';
import { CubeTextureLoader } from 'three';

const Skybox = () => {
  const { scene } = useThree();
  scene.background = new CubeTextureLoader().load(
    Array(6).fill('/orbit/stars2048.jpeg')
  );

  return null;
};

export default Skybox;
