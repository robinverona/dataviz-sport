import logo from './logo.svg';
import './App.css';
import Box from './Box';
import Plane from './Plane'
import { useRef } from 'react';
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber';
import { OrbitControls, TransformControls } from 'three-stdlib'

extend({ OrbitControls, TransformControls })


function App() {

  const Controls = () => {
    const controls = useRef()
    const { camera, gl } = useThree()
    useFrame(() => controls.current.update())
    return <orbitControls ref={controls} args={[camera, gl.domElement]} enableDamping dampingFactor={0.1} rotateSpeed={0.5} />
  }

  return (
    <div className='canvas'>
      <Canvas camera={{
        position: [0, 0, -30]
      }}
        // orthographic
      >
        <Controls />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
        <Plane position={[0, 0, 0]} />
      </Canvas>
    </div>
  );
}

export default App;
