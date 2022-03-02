import React, { Suspense, useRef } from 'react';
import { Canvas } from 'react-three-fiber';
import { Preload, Plane } from '@react-three/drei';
import CharacterCard from './CharacterCard';

const ThreeScene = () => {
    const mesh = useRef()

    return (
        <Canvas
            camera={{
                position: [0, 0, 2],
                fov: 75
            }}>
            <ambientLight/>
            {/* <Suspense fallback={null}> */}
                <mesh
                    ref={mesh}
                    scale={1}>
                    <Plane args={[2, 4, 1.5]} rotation={[Math.PI / 2, 0, 0]} >
                        <meshBasicMaterial
                            attach='material'
                            // map={characterTexture}
                            color='pink'
                            transparent/>
                            {/* <Text color='white'> Test </Text> */}
                    </Plane>
                </mesh>
            {/* </Suspense> */}
            <Preload all='true'/>
        </Canvas>
    )
}

export default ThreeScene;