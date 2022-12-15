import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

const France = (props) => {
  const { nodes, materials } = useGLTF("/MapWithTextures.gltf");
  const franceRef = useRef()
  
  useEffect(() => {
    console.log(franceRef.current.children[0].rotation)
    franceRef.current.children[0].rotation.x = -0.9
    franceRef.current.children[1].rotation.x = -0.9
    franceRef.current.children[0].rotation.y = 3.14
    franceRef.current.children[1].rotation.y = 3.14
  }, [])
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]} rotateX={134} ref={franceRef}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials["Material.001"]}
          rotateX={134}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_1.geometry}
          material={materials["Material.003"]}
          rotateX={134}

        />
      </group>
    </group>
  );
}

useGLTF.preload(".//MapWithTextures.gltf");

export default France;