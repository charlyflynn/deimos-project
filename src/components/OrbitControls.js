import { extend, useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

const CameraControls = () => {
  const controls = useRef();
  const {
    camera,
    gl: { domElement },
  } = useThree();
  useFrame(() => controls.current.update());
  return <orbitControls ref={controls} args={[camera, domElement]} />;
};

export default CameraControls;
