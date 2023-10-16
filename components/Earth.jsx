"use client";

import React, { useRef } from "react";

import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useScroll, useSpring } from "framer-motion";
import { motion } from "framer-motion-3d";

const Earth = () => {
  const scene = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scene,
    offset: ["start end", "end start"],
  });

  /* Used for smooth rotation if you're not using Lenis Scroll */
  // const smoothRotation = useSpring(scrollYProgress, {
  //   damping: 20,
  // });

  const [color, normal, aoMap] = useLoader(TextureLoader, [
    "../assets/colormap.png",
    "../assets/normalmap.png",
    "../assets/occlusionmap.png",
  ]);

  return (
    <Canvas ref={scene}>
      <ambientLight intensity={0.1} />
      <directionalLight intensity={3.5} position={[1, 0, -0.25]} />
      <motion.mesh scale={2.5} rotation-y={scrollYProgress}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
      </motion.mesh>
    </Canvas>
  );
};

export default Earth;
