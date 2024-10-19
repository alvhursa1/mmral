'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

interface CarouselImage {
  src: string
  alt: string
}

const images: CarouselImage[] = [
  { src: "/images/rojo/UmbrellaMan.jpg", alt: "Image 1" },
  { src: "/images/rojo/TRUMPATTEMPT.jpg", alt: "Image 2" },
  { src: "/images/negro/Death-of-Elvis-Presley2.jpg", alt: "Image 3" },
  { src: "/images/negro/Fire-in-Australia-2019-2.jpg", alt: "Image 4" },
  { src: "/images/negro/Brexit.jpg", alt: "Image 5" },
]

export default function MobileImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${currentIndex * 100}%)`
    }
  }, [currentIndex])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    if (touchStart - touchEnd < -75) {
      // Swipe right
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }
  }

  return (
    <div className="md:hidden">
      <div className="relative overflow-hidden w-full h-[300px]">
        <div
          ref={carouselRef}
          className="flex transition-transform duration-300 ease-in-out"
          style={{ width: `${images.length * 100}%` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {images.map((image, index) => (
            <div key={index} className="flex-shrink-0" style={{ width: `${100 / images.length}%` }}>
              <Image
                src={image.src}
                alt={image.alt}
                layout="responsive"
                width={100}
                height={100}
                objectFit="contain"
                className="pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}