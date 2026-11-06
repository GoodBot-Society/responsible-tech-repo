import React from "react";
import Link from "next/link";
import Image from 'next/image';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-3 grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-2 h-14 items-center sm:px-4 sm:flex sm:justify-between sm:h-16">
      {" "}
      <Link href="/">
        <Image
          src="/svg/logo.svg"
          width={169}
          height={40}
          alt="goodbot logo"
          className="h-auto w-20 min-[375px]:w-24 sm:w-[169px]"
        />
      </Link>
      <h1 className="ml-5 sm:ml-0 w-24 min-[375px]:w-28 text-[13px] min-[375px]:text-sm leading-tight font-bold font-poppins text-center text-goodbot-primary-starryNightBlack sm:w-auto sm:text-base">
        Responsible Tech Repo
      </h1>
      <Link
        href="/login"
        className="justify-self-end whitespace-nowrap rounded-full border border-goodbot-primary-light px-3 py-2 text-xs font-semibold font-poppins text-goodbot-primary-light min-[375px]:px-3 min-[375px]:text-xs sm:px-4 sm:py-2 sm:text-base invisible"
      >
        {/* @todo: When the login page is created, remove the 'invisible' class */}
        login
      </Link>
    </header>
  );
};

export default Header;
