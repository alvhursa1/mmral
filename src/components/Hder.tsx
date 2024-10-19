import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hder = () => {
  return (
    <header className="sticky top-0 w-full bg-white py-[2%] pl-[5%] flex items-center z-50 shadow-md">
      <div className="">
        <Link href="/">
          <Image
            src="/images/LogoMemeorial.svg"
            alt="Logo Memeorial"
            width={500}
            height={40}
            className="w-40 h-auto sm:w-32 md:w-40 lg:w-48 xl:w-56"
          />
        </Link>
      </div>
    </header>
  );
};

export default Hder;