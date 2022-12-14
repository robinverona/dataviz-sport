import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import * as THREE from 'three'
import { MeshStandardMaterial } from 'three';

const Plane = (props) => {
    useEffect(() => {
        console.log(props)
    }, [])

    const { viewport } = useThree()

    const x = 0, y = 0;

    const heartShape = new THREE.Shape();

    // heartShape.moveTo( x + 5, y + 5 );
    heartShape.lineTo( x + 10, y - 5)
    heartShape.quadraticCurveTo( x + 11, y - 6)
    // heartShape.lineTo( x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19 );
    // heartShape.lineTo( x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7 );
    // heartShape.lineTo( x + 16, y + 7, x + 16, y, x + 10, y );
    // heartShape.lineTo( x + 7, y, x + 5, y + 5, x + 5, y + 5 );
    // heartShape.lineTo(x + 10, y + 10)
    // heartShape.lineTo(x + 3, y + 3)

    return (
        <mesh
            {...props}
            // position={[3, 0, 2]}
            rotation={new THREE.Euler(3.14, 0, 0)}
            scale={[1, 1, 1]}
        >
            <shapeGeometry  args={[heartShape]} />
            <meshStandardMaterial attach="material" color='green' />
        </mesh>
    )
}

export default Plane;