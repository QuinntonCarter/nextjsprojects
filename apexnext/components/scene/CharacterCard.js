import React, { useRef } from 'react';
import { Plane, useTexture, Text } from '@react-three/drei';

const CharacterCard = ({characterIcon}) => {
    const characterTexture = useTexture(characterIcon)
    const planeSize = [2, 4, 1.5]
    const mesh = useRef()
    return (
        <mesh
            ref={mesh}
            scale={1}
        >
            <planeGeometry args={[2, 4, 1.5]} rotation={[Math.PI / 2, 0, 0]} />
                <meshBasicMaterial
                    attach='material'
                    // map={characterTexture}
                    color='pink'
                    transparent/>
                    {/* <Text color='white'> Test </Text> */}
            {/* </Plane> */}
        </mesh>
    )
}

export default CharacterCard;