import React from "react";
import Link from "next/link";
import Image from 'next/image';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 flex justify-between h-16 items-center">
      <Link href="/">
        <Image src='/svg/logo.svg'
          width={169}
          height={40}
          alt="goodbot logo"
        ></Image>
      </Link>
      <h1 className="text-base font-bold font-poppins text-center text-goodbot-primary-starryNightBlack">Responsible Tech Repo</h1>
      <Link href="/login" className="text-base font-bold text-center text-sky-900 font-poppins uppercase invisible">
        {/* @todo: When the login page is created, remove the 'invisible' class */}
        login
      </Link>
    </header>
  );
};

export default Header;
