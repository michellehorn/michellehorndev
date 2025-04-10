import React, { PropsWithChildren, useEffect, useState } from 'react';
import Particles from 'react-particles';
import { Engine } from 'tsparticles-engine';
import { loadLinksPreset } from 'tsparticles-preset-links';

const ParticlesBackground: React.FC<PropsWithChildren> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  const particlesInit = async (engine: Engine) => {
    await loadLinksPreset(engine);
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-[#0f0f0f] to-[#141414]">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          preset: 'links',
          fullScreen: { enable: false },
          background: { color: 'transparent' },
          particles: {
            links: {
              color: '#00ff00',
              distance: isMobile ? 80 : 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: { enable: true, speed: 1 },
            number: { value: 60 },
            opacity: { value: 0.3 },
            size: { value: 2 },
          },
        }}
        className="absolute inset-0 z-0"
      />
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">{children}</div>
    </div>
  );
};

export default ParticlesBackground;
