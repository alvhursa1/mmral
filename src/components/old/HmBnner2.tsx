"use client";

import React from 'react';
import Image from 'next/image';
import CustomTimeline from '../Home/CustomTimeline';
import BasicTimeline from '../Home/BasicTimeline';
import Link from 'next/link';

const HmBnner = () => {
  return (
    <div className="flex w-full p-0 relative">
      {/* Columna Izquierda */}
      <div className="w-full md:w-1/2 p-5 pl-[3%]">
      <div className="flex flex-col w-full pr-[10%]">
          <Image
            src="/images/PriceHistory.svg"
            alt="Price History"
            width={100}
            height={100}
            layout="responsive"
            className="w-full"
          />
        </div>
        <div className="flex flex-col md:flex-row mt-5">
          {/* Columna Izquierda del Flex Interno */}
          <div className="w-full md:w-1/2">
            <p className="font-satoshi-regular text-[1rem] text-justify mt-8">
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
              width={175}
              height={77}
              layout="fixed"
            />
          </div>
        </div>
        {/* Flex Secundario 2 para los botones */}
        <div className="flex flex-col md:flex-row mt-5 space-y-4 md:space-y-0 md:space-x-4">
          <Link href="/buy" className="block w-full py-6 text-center text-[1rem] font-satoshi-medium text-white bg-gradient-to-r from-[#FF3E5A] to-[#E515D7] rounded-full shadow-md transition-all duration-200 ease-in-out transform hover:bg-none hover:text-[#E515D7] hover:border hover:border-[#FF3E5A] hover:shadow-lg hover:scale-105">
            BUY THE COLLECTION
          </Link>
          <Link href="/manifesto" className="block w-full py-6 text-center text-[1rem] font-satoshi-medium text-[#E515D7] bg-white border border-[#FF3E5A] rounded-full shadow-md transition-all duration-200 ease-in-out transform hover:bg-gradient-to-r hover:from-[#FF3E5A] hover:to-[#E515D7] hover:text-white hover:shadow-lg hover:scale-105">
            READ THE MANIFESTO
          </Link>
        </div>
        {/* Flex 4 para la imagen SVG */}
        <div className="flex w-full mt-5 md:mt-0 md:pt-[20%] justify-center md:justify-start py-[8%] md:py-0">
          <Image
            src="/images/().svg"
            alt="SVG Image"
            width={50}
            height={50}
            layout="fixed"
            className="w-auto h-auto"
          />
        </div>
        {/* Flex 5 para el contenido adicional */}
        <div className="flex flex-col md:flex-row mt-5">
          {/* Columna Izquierda del Flex 5 */}
          <div className="w-full md:w-1/2 sm:mb-10">
            <h2 className="font-satoshi-medium text-[1.125rem] text-[#FF3E5A]">
              Neutral Standpoint.
            </h2>
            <p className="font-satoshi-regular pt-4 pb-6 text-[1rem] text-[#000] md:pl-[15%] text-justify">
              The project positions itself as a neutral market maker, presenting events with the objectivity of a history book.
            </p>
          </div>
          {/* Columna Derecha del Flex 5 */}
          <div className="w-full md:w-1/2 sm:mt-4 md:mt-0">
            <h2 className="font-satoshi-medium text-[1.125rem] text-[#FF3E5A]">
              Dynamic Market
            </h2>
            <p className="font-satoshi-regular pt-4 pb-6 text-[1rem] text-[#000] md:pl-[15%] text-justify">
              Releases NFTs in phases to create a dynamic market driven by demand and rarity.
            </p>
          </div>
        </div>
        {/* Flex 6 para el contenido adicional */}
        <div className="flex flex-col md:flex-row mt-5">
          {/* Columna Izquierda del Flex 6 */}
          <div className="w-full md:w-1/2 sm:mb-10">
            <h2 className="font-satoshi-medium text-[1.125rem] text-[#FF3E5A]">
              Cross-Generational Appeal
            </h2>
            <p className="font-satoshi-regular pt-4 pb-6 text-[1rem] text-[#000] md:pl-[15%] text-justify">
              By capturing significant moments from various eras, our collection has the potential to attract collectors.
            </p>
          </div>
          {/* Columna Derecha del Flex 6 */}
          <div className="w-full md:w-1/2 sm:mt-4 md:mt-0">
            <h2 className="font-satoshi-medium text-[1.125rem] text-[#FF3E5A]">
              Community-Driven
            </h2>
            <p className="font-satoshi-regular pt-4 text-[1rem] text-[#000] md:pl-[15%] text-justify">
              Users can influence the platform&apos;s direction by voting on future events using a native token.
            </p>
          </div>
        </div>
        <div className="md:flex mt-[25%] -ml-2">
          <Image
            src="/images/Roadmap.svg"
            alt="SVG Image"
            width={50}
            height={50}
            layout="fixed"
            className="w-[50%] h-[50%]"
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

      {/* Columna Centro */}
      <div className="w-full md:w-1/4 p-5">
        <div className="flex flex-col w-full">
          <Image
            src="/images/CenterImage.svg"
            alt="Center Image"
            width={100}
            height={100}
            layout="responsive"
            className="w-full"
          />
        </div>
      </div>
      {/* Columna Derecha */}
      <div className="w-full md:w-1/4 p-5 pr-[3%]">
        <div className="flex flex-col w-full">
          <Image
            src="/images/RightImage.svg"
            alt="Right Image"
            width={100}
            height={100}
            layout="responsive"
            className="w-full"
          />
        </div>
        <div className="flex flex-col mt-5">
          <p className="font-satoshi-regular text-[1rem] text-justify mt-8">
            <span className="font-satoshi-bold">Right Column Content</span> with some additional text here.
            <br />
            <br />
            More content for the right column.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HmBnner;