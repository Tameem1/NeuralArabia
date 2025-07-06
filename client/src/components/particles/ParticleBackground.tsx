import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

type ParticleBackgroundProps = {
  className?: string;
};

export default function ParticleBackground({ className = "" }: ParticleBackgroundProps) {
  const particlesInit = useCallback(async (engine: Engine) => {
    // Initialize the tsParticles instance
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // Particles container loaded
  }, []);

  return (
    <Particles
      id="tsparticles"
      className={`absolute inset-0 ${className}`}
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.5,
              },
            },
          },
        },
        particles: {
          color: {
            value: ["#6ad4e2", "#997fb8", "#f3c575"], // Gradient colors
          },
          links: {
            color: {
              value: "#6ad4e2", // Cyan color for links
            },
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 60,
          },
          opacity: {
            value: 0.3,
            animation: {
              enable: true,
              minimumValue: 0.1,
              speed: 1,
              sync: false
            }
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
        fullScreen: { enable: false },
        background: {
          color: {
            value: "transparent",
          },
        },
      }}
    />
  );
}