import React, { useRef } from 'react';
import { useGLTF, Text, Center } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const TelegramModel = () => {
  const { scene } = useGLTF(process.env.PUBLIC_URL + '/models/tg.glb');
  const modelRef = useRef();

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <group ref={modelRef}>
      <Center>
        <primitive 
          object={scene} 
          scale={0.65} 
          onClick={() => window.open('https://t.me/polyclinic_kursBot', '_blank')}
        />
      </Center>

      <Text
        position={[0, 1.5, 0]}
        fontSize={0.3}
        color="#0088cc" 
        anchorX="center"
        anchorY="middle"
      >
        Pollyclinic App
      </Text>
    </group>
  );
};

export default TelegramModel;