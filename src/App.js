import logo from './logo.svg';
import './App.css';
import Box from './Box';
import { Canvas } from '@react-three/fiber';
import Plane from './Plane'

function App() {
  return (
    <div className='canvas'>
      <Canvas camera={{
        position: [0, 0, -5]
        }}
        orthographic
      >
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
