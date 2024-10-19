"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { datarojo } from "../../data/datarojo";
import { datanegro } from "../../data/datanegro";
import Image from "next/image";

type ImageData = {
  id: number;
  src: string;
  link: string;
};

export default function VerticalCarousel() {
  const [imageSet, setImageSet] = useState<ImageData[]>([]);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const shuffleArray = (array: ImageData[]) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    const generateImageSet = () => {
      const shuffledRojo = shuffleArray([...datarojo]);
      const shuffledNegro = shuffleArray([...datanegro]);
      const images: ImageData[] = [];

      while (shuffledRojo.length > 0 || shuffledNegro.length > 0) {
        if (shuffledRojo.length > 0) {
          images.push(shuffledRojo.pop()!);
        }
        for (let i = 0; i < 3; i++) {
          if (shuffledNegro.length > 0) {
            images.push(shuffledNegro.pop()!);
          }
        }
      }

      return images;
    };

    setImageSet(generateImageSet());
  }, []);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const animationSettings = {
    y: [0, -100 * imageSet.length + "vh"],
    transition: {
      repeat: Infinity,
      duration: 360,
      ease: "linear",
    },
  };

  return (
    <div
      ref={carouselRef}
      className="relative overflow-hidden w-full h-screen"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="absolute flex flex-col w-full"
        animate={isPaused ? {} : animationSettings}
      >
        {imageSet.map((image, index) => (
          <a key={image.id} href={image.link} className="relative w-full h-auto">
            <Image
              src={image.src}
              alt={`image-${image.id}`}
              layout="responsive"
              width={100}
              height={100}
              objectFit="contain"
              priority={index < 4} // Prioriza las primeras 4 imágenes
              quality={100}
            />
          </a>
        ))}
      </motion.div>
    </div>
  );
}