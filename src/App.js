import logo from './logo.svg';
import './App.css';
import Box from './Box';
import Plane from './Plane'
import { Suspense, useRef } from 'react';
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber';
import { OrbitControls, TransformControls } from 'three-stdlib'
import France from './France';

extend({ OrbitControls, TransformControls })


function App() {

  const Controls = () => {
    const controls = useRef()
    const { camera, gl } = useThree()
    useFrame(() => controls.current.update())
    return <orbitControls ref={controls} args={[camera, gl.domElement]} enableDamping dampingFactor={0.1} rotateSpeed={0.5} />
  }

  const Loading = () => {
    return (
      <group>loading...</group>
    )
  }

  return (
    <div className='canvas'>
      <Canvas camera={{
        position: [0, 0, -5]
      }}
        // orthographic
      >
        <Controls />
        {/* <ambientLight /> */}
        <pointLight position={[0, 0, -1]} />
        {/* <Plane position={[0, 0, 0]} /> */}
        <Suspense fallback={<Loading />}>
                <France
                />
              </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
