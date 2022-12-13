import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import * as THREE from 'three'
import { MeshStandardMaterial } from 'three';

const Plane = (props) => {
    useEffect(() => {
        console.log(props)
    }, [])

    const { viewport } = useThree()

    return (
        <mesh
            {...props}
            // position={[3, 0, 2]}
            rotation={new THREE.Euler(3.14, 0, 0)}
            scale={[viewport.width, viewport.height, 1]}
        >
            <planeBufferGeometry attach="geometry" args={[1, 1, 100, 100]} wireframe />
            <meshStandardMaterial attach="material" color='green' wireframe wireframeLinewidth={1}/>
        </mesh>
    )
}

export default Plane;