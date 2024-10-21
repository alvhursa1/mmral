"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimationComponent from './AnimatedComponent';

const ManBnner = () => {
  return (
    <div className="flex flex-col w-full px-[5%] pt-[3%] pb-[3%]">
      {/* Flex 1 */}
      <div className="flex w-full mb-8">
        <div className="w-full md:w-auto">
          <Image
            src="/images/capturing.svg"
            alt="Capturing"
            layout="responsive"
            width={100}
            height={100}
            className="w-full md:w-auto"
          />
        </div>
      </div>
      {/* Flex 2 */}
      <div className="flex flex-wrap w-full">
        {/* Columna 1 */}
        <div className="w-full md:w-1/5 p-4">
          <span className="font-satoshi-bold text-[1.125rem]">(MEME)ORIAL</span> Gallery.
          <p className="font-satoshi-regular text-[1rem] text-justify mt-4">
            A play on &quot;memorial,&quot; implying these memes serve as a kind of digital monument to events.
            <br />
            <br />
          </p>
          <br />
          <br />
          <Link href="/buy" className="block w-full py-6 text-center text-[1rem] font-satoshi-medium text-white bg-gradient-to-r from-[#FF3E5A] to-[#E515D7] rounded-full shadow-md transition-all duration-200 ease-in-out transform hover:bg-none hover:text-[#E515D7] hover:border hover:border-[#FF3E5A] hover:shadow-lg hover:scale-105 mt-4">
            BUY THE COLLECTION
          </Link>
        </div>
        {/* Columna 2 */}
        <div className="w-full md:w-1/5 p-4">
          <span className="font-satoshi-bold text-[1.125rem]">What?</span>
          <p className="font-satoshi-regular text-[1rem] text-justify mt-4">
            Meme - a distilled idea or event. Reducing complex cultural events or sentiments into the smallest and densest format.
            <br />
            <br />
            Add to the Idea (meme) an additional dimension - value, and you have an even more detailed information capsule of what influences the collective zeitgeist and what value people put on individual events.
            <br />
            <br />
            Put a price on history.
          </p>
        </div>
        {/* Columna 3 */}
        <div className="w-full md:w-1/5 p-4"></div>
        {/* Columna 4 */}
        <div className="w-full md:w-1/5 p-4"></div>
        {/* Columna 5 */}
        <div className="w-full md:w-1/5 p-4"></div>
      </div>

      {/* Flex 3 */}
      <div className="flex flex-wrap w-full">
        {/* Columna 1 */}
        <div className="w-full md:w-1/5 p-4"></div>
        {/* Columna 2 */}
        <div className="w-full md:w-1/5 p-4"></div>
        {/* Columna 3 */}
        <div className="w-full md:w-1/5 p-4">
          <span className="font-satoshi-bold text-[1.125rem]">Why?</span>
          <div className="w-full md:w-auto pt-5">
            <Image
              src="/images/decline.svg"
              alt="Capturing"
              layout="responsive"
              width={100}
              height={100}
              className="w-full md:w-auto"
            />
          </div>
        </div>
        {/* Columna 4 */}
        <div className="w-full md:w-1/5 p-4">
          <p className="font-satoshi-regular text-[1rem] text-justify">
            Memes, with their blend of humor, cultural references, and often incisive commentary, spread rapidly across social networks, shaping public discourse and opinion faster than traditional news cycles. Their visual nature and emotional appeal make them more engaging and memorable than lengthy articles or broadcasts.
          </p>
        </div>
        {/* Columna 5 */}
        <div className="w-full md:w-1/5 p-4 flex items-center justify-center">
          <div className="w-full md:w-auto">
            <Image
              src="/images/()manif.svg"
              alt="Capturing"
              layout="responsive"
              width={100}
              height={100}
              className="w-full md:w-auto"
            />
          </div>
        </div>
      </div>

     {/* Flex 4 */}
     <div className="flex flex-wrap w-full">
        {/* Columna 1 */}
        <div className="w-full md:w-1/5 p-4"></div>
        {/* Columna 2 */}
        <div className="w-full md:w-1/5 p-4"></div>
        {/* Columna 3 */}
        <div className="w-full md:w-1/5 p-4">
          <p className="font-satoshi-regular text-[1rem] text-justify">
          The decline of traditional mainstream media and the rise of social media is largely driven by the popularity of short, viral content formats, particularly memes. 
            <br />
            <br />
These bite-sized, highly shareable pieces of media cater to shrinking attention spans and the desire for quick, easily digestible information. 
          </p>
        </div>
        {/* Columna 4 */}
        <div className="w-full md:w-1/5 p-4 flex items-center justify-center">
          <div className="w-full md:w-auto">
            <Image
              src="/images/declineline.svg"
              alt="Capturing"
              layout="responsive"
              width={100}
              height={100}
              className="w-full md:w-auto "
            />
          </div>
        </div>
        {/* Columna 5 */}
        <div className="w-full md:w-1/5 p-4 flex items-center justify-center">
        <p className="font-satoshi-regular text-[1rem] text-justify">
        As users increasingly prefer to consume and share these compact, impactful content pieces, traditional media outlets struggle to compete with the immediacy, relatability, and virality of meme culture, leading to a shift in how information is disseminated and consumed in the digital age. Memes are distilled units of public discourse. 
            <br />
            <br />
And now people can own an NFT of a meme.
          </p>
        </div>
      </div>

     {/* Flex 5 */}
     <div className="flex flex-wrap w-full">
        {/* Columna 1 */}
        <div className="w-full md:w-1/5 p-4"></div>
        {/* Columna 2 */}
        <div className="w-full md:w-1/5 p-4">
        <span className="font-satoshi-bold text-[1.125rem]">But it’s just a silly pic?!</span>
          <p className="font-satoshi-regular text-[1rem] text-justify mt-4">
          Yes, but a pic is worth a 1000 words!
            <br />
            <br />
            Decrease of attention span - increase of input bandwidth
            <br />
          </p>
        </div>
        {/* Columna 3 */}
        <div className="w-full md:w-1/5 p-4">

        </div>
        {/* Columna 4 */}
        <div className="w-full md:w-1/5 p-4">

        </div>
        {/* Columna 5 */}
        <div className="w-full md:w-1/5 p-4 flex items-center justify-center">

        </div>
      </div>

        <AnimationComponent />

    </div>
  );
};

export default ManBnner;