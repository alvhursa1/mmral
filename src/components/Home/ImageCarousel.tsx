'use client';   

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

// Importa los datos
import { datarojo } from "../../data/datarojo";
import { datanegro } from "../../data/datanegro-movil";

type ImageCarouselProps = unknown;

const ImageCarousel: React.FC<ImageCarouselProps> = () => {
  const [images, setImages] = useState<{ src: string; alt: string }[]>([]);

  useEffect(() => {
    // Selecciona una imagen aleatoria de datarojo
    const randomRojo = datarojo[Math.floor(Math.random() * datarojo.length)];

    // Selecciona 3 imágenes aleatorias de datanegro
    const randomNegro: { src: string; alt: string }[] = [];
    while (randomNegro.length < 3) {
      const randomImage = datanegro[Math.floor(Math.random() * datanegro.length)];
      if (!randomNegro.some(image => image.src === randomImage.src)) {
        randomNegro.push({
          src: randomImage.src,
          alt: randomImage.src.split("/").pop() || "Image"
        });
      }
    }

    // Combina las imágenes seleccionadas
    const selectedImages = [randomRojo, ...randomNegro].map((image) => ({
      src: image.src,
      alt: image.src.split("/").pop() || "Image",
    }));

    setImages(selectedImages);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    variableWidth: true,
  };

  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className="flex items-center justify-center"
            style={{
              height: "350px", // Altura fija para todas las imágenes
              marginRight: "20px", // Separación entre imágenes
            }}
          >
            <div className="relative h-full w-auto">
              <Image
                src={image.src}
                alt={image.alt}
                layout="intrinsic"
                width={350} // Ancho ajustado automáticamente
                height={350} // Altura fija
                objectFit="contain"
                className="h-full w-auto"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;