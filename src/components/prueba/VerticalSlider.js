import React, { useState, useEffect } from "react";
import styles from "./VerticalSlider.module.css";

const VerticalSlider = ({ slides, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? slides.length - 1 : prevIndex - 1
      );
    }, interval);

    return () => clearInterval(sliderInterval); // Limpiar el intervalo cuando el componente se desmonte
  }, [slides.length, interval]);

  return (
    <div className={styles.sliderContainer}>
      <div
        className={styles.sliderContent}
        style={{ transform: `translateY(${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className={styles.slide}>
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalSlider;
