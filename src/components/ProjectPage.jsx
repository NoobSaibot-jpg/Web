import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Center } from '@react-three/drei';
import TelegramModel from './TelegramModel';

const ProjectPage = () => {
  return (
    <div className="project-page">
      <h2>Мій улюблений проект: Pollyclinic APP (Наразі не активний, але готовий до запуску)</h2>
      <div className="project-description">
        <p>Курсова робота з дисципліни "Технології програмування".</p>
        <ul>
          <li>Авторизація через Telegram.</li>
          <li>Запис до лікаря та керування акаунтом.</li>
        </ul>
      </div>

      <div className="model-container" style={{ height: '500px', width: '100%' }}>
        <Canvas 
          gl={{ alpha: true }} 
          camera={{ position: [0, 0, 5], fov: 50 }}
        >
          <ambientLight intensity={0.5} />
          <Suspense fallback={null}>
            <Center environment={null} intensity={1} contactShadow={false} adjustCamera={true}>
              <TelegramModel />
            </Center>
          </Suspense>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
      <p className="hint">Натисніть на логотип, щоб відкрити Telegram</p>
    </div>
  );
};

export default ProjectPage;