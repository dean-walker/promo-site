"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Particle = {
  x: number;
  y: number;
  size: number;
  color: string;
  velocity: number;
  rotation: number;
};

function getVortexY(x: number) {
  return Math.sin((x / 87) * Math.PI) * Math.sin((x / 63) * Math.PI - 6);
}

export function AnimatedBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const globalRotation = useRef(0);

  const createParticle = () => {
    return {
      x:
        Math.random() > 0.5
          ? Math.random() * Math.random() * 33
          : 100 - Math.random() * Math.random() * 33,
      y: Math.random() * 10,
      size: Math.random() * 10 + 1,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      velocity: Math.random() * 2 - 1,
      rotation: Math.random() * Math.PI * 2,
    };
  };

  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push(createParticle());
    }
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(
        particles.map((particle) => {
          return {
            ...particle,
          };
        }),
      );
      globalRotation.current += 0.04;
    }, 1000 / 10);
    return () => clearInterval(interval);
  }, [particles]);

  return (
    <div className={"fixed top-0 left-0 -z-10 h-full w-full overflow-hidden opacity-30"}>
      {particles.map((particle, index) => {
        const rotation = particle.rotation + globalRotation.current;
        const vortexY = getVortexY(particle.x + globalRotation.current * 10) * 20;
        const vortexScale = getVortexY(particle.x + globalRotation.current * 10 + 1400) * 2;
        const vortexOpacity = getVortexY(particle.x + globalRotation.current * 10 + 600);
        const trueY = particle.y * vortexScale;
        const outY = trueY * Math.sin(rotation) + vortexY + 66;
        const depth = Math.cos(rotation) * 0.25 * vortexScale + 1;

        console.log(outY, particle.y, rotation);

        return (
          <motion.div
            key={index}
            className="absolute rounded-full bg-white bg-blend-lighten"
            initial={{
              opacity: 0,
              scale: 0.98,
              width: 0,
              height: 0,
              left: particle.x + "%",
              top: outY + "%",
            }}
            animate={{
              left: particle.x + "%",
              top: outY + "%",
              width: (particle.size * 2 + 5) * depth,
              height: (particle.size * 2 + 5) * depth,
              opacity: vortexOpacity * depth * 0.2 + 0.1,
              scale: 1,
            }}
            transition={{ duration: 1, ease: "linear" }}
          />
        );
      })}
    </div>
  );
}
