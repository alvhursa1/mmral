'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CustomTimeline from './CustomTimeline'
import BasicTimeline from './BasicTimeline'
import ImgCarruselArrAbj from '../carrusel/ImgCarruselArrAbj'
import ImgCarruselAbjArr from '../carrusel/ImgCarruselAbjArr'
import ImgCarruselDerIzq from '../carrusel/ImgCarruselDerIzq'
import ImgCarruselIzqDer from '../carrusel/ImgCarruselIzqDer'

export default function HmeBnner() {
  return (
    <div className="flex flex-col md:flex-row w-full p-0 md:px-[5%] pb-[3%] relative">
      {/* Columna Izquierda */}
      <div className="w-full md:w-1/2 py-8 md:pr-8 px-[8%] md:px-0">
        <div className="flex flex-col w-full -ml-[5%] pr-[10%] ">
          <Image
            src="/images/PriceHistory.svg"
            alt="Price History"
            layout="responsive"
            width={100}
            height={100}
            className="w-full"
          />
        </div>
        <div className="md:hidden w-screen relative left-1/2 right-1/2 mx-[-50vw] my-10">
            <ImgCarruselIzqDer />
          </div>
        <div className="flex flex-col md:flex-row mt-5">
          {/* Columna Izquierda del Flex Interno */}
          <div className="w-full md:w-1/2">
            <p className="font-satoshi-regular text-[1.125rem] text-justify mt-8">
              <span className="font-satoshi-bold">(MEME)ORIAL</span> lets you collect iconic images from the past and present, turning them into exclusive NFTs.
              <br />
              <br />
              From historical landmarks to viral moments, we have something for every collector.
            </p>
          </div>
          {/* Columna Derecha del Flex Interno */}
          <div className="w-full md:w-1/2 flex justify-center items-center mt-5 md:mt-0">
            <Image
              src="/images/opensea.svg"
              alt="OpenSea Logo"
              layout="fixed"
              width={175}
              height={77}
            />
          </div>
        </div>
        {/* Flex Secundario 2 para los botones */}
        <div className="flex flex-col md:flex-row mt-5 space-y-4 md:space-y-0 md:space-x-4">
          <Link href="/buy" className="block w-full py-6 text-center text-[1rem] font-satoshi-medium text-white bg-gradient-to-r from-[#FF3E5A] to-[#E515D7] rounded-full shadow-md transition-all duration-200 ease-in-out transform hover:bg-none hover:text-[#E515D7] hover:border hover:border-[#FF3E5A] hover:shadow-lg hover:scale-105">
            SEE THE COLLECTION
          </Link>
          <Link href="/manifesto" className="block w-full py-6 text-center text-[1rem] font-satoshi-medium text-[#E515D7] bg-white border border-[#FF3E5A] rounded-full shadow-md transition-all duration-200 ease-in-out transform hover:bg-gradient-to-r hover:from-[#FF3E5A] hover:to-[#E515D7] hover:text-white hover:shadow-lg hover:scale-105">
            THE CONCEPT
          </Link>
        </div>
        {/* Flex 4 para la imagen SVG */}
        <div className="flex w-full mt-5 md:mt-0 md:pt-[20%] justify-center md:justify-start py-[8%] md:py-0">
          <Image
            src="/images/().svg"
            alt="SVG Image"
            layout="fixed"
            width={50}
            height={50}
            className="w-auto h-auto"
          />
        </div>
        {/* Flex 5 para el contenido adicional */}
        <div className="flex flex-col md:flex-row mt-5">
          {/* Columna Izquierda del Flex 5 */}
          <div className="w-full md:w-1/2 sm:mb-10">
            <h2 className="font-satoshi-medium text-[1.125rem] text-[#FF3E5A]">
            Neutral observer
            </h2>
            <p className="font-satoshi-regular pt-4 pb-6 text-[1.125rem] text-[#000] md:pl-[15%] text-justify">
            The project positions itself as a neutral observer of the zeitgeist, presenting events with the objectivity of a history book and context of broader social vibe.
            </p>
          </div>
          {/* Columna Derecha del Flex 5 */}
          <div className="w-full md:w-1/2 sm:mt-4 md:mt-0">
            <h2 className="font-satoshi-medium text-[1.125rem] text-[#FF3E5A]">
            Virality as the new measure

            </h2>
            <p className="font-satoshi-regular pt-4 pb-6 text-[1.125rem] text-[#000] md:pl-[15%] text-justify">
            Mainstream Media are no longer relevant. They can’t force public opinion as they once could. Manufacturing consent doesn’t work with the same mouthpieces as in the last century.
            </p>
          </div>
        </div>
        {/* Flex 6 para el contenido adicional */}
        <div className="flex flex-col md:flex-row mt-5">
          {/* Columna Izquierda del Flex 6 */}
          <div className="w-full md:w-1/2 sm:mb-10">
            <h2 className="font-satoshi-medium text-[1.125rem] text-[#FF3E5A]">
            The meme you already know
            </h2>
            <p className="font-satoshi-regular pt-4 pb-6 text-[1.125rem] text-[#000] md:pl-[15%] text-justify">
            By capturing significant moments from various eras and also the current events, our memes are immediately recognizable. No need for explanation what is what, why something has value or what is the silly pic of an animal with an (expensive) price tag.
            </p>
          </div>
          {/* Columna Derecha del Flex 6 */}
          <div className="w-full md:w-1/2 sm:mt-4 md:mt-0">

          </div>
        </div>
        <div className="md:flex">
          {/* Full width carousel for mobile */}
          <div className="md:hidden w-screen relative left-1/2 right-1/2 mx-[-50vw] my-10">
            <ImgCarruselDerIzq />
          </div>
          <Image
            src="/images/Roadmap.svg"
            alt="SVG Image"
            layout="fixed"
            width={50}
            height={150}
            className="w-[150%] h-[50%] md:w-[50%] -ml-2"
          />
        </div>
        {/* CustomTimeline visible en desktop y tablets */}
        <div className="hidden md:flex mt-5">
          <CustomTimeline />
        </div>
        {/* BasicTimeline visible en móviles */}
        <div className="flex md:hidden mt-5">
          <BasicTimeline />
        </div>
      </div>
      {/* Columna Derecha 1 */}
      <div className="hidden md:block w-full md:w-1/4 md:sticky md:top-0 h-screen pr-1">
        <ImgCarruselArrAbj />
      </div>
      {/* Columna Derecha 2 */}
      <div className="hidden md:block w-full md:w-1/4 md:sticky md:top-0 h-screen pl-1">
        <ImgCarruselAbjArr />
      </div>
    </div>
  )
}