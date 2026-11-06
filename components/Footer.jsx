import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="mt-28 bg-goodbot-background-starryNightBlack py-[100px] font-poppins max-[767px]:mt-12 max-[767px]:pt-12 max-[767px]:pb-8">
            <div className="container flex flex-col justify-center items-center border-b border-white border-opacity-20">
                <p className="text-sm text-white uppercase tracking-[2.8px] text-opacity-60 mb-4 max-[479px]:max-w-[280px] min-[480px]:max-[767px]:max-w-[600px] max-[767px]:text-center max-[767px]:text-xs max-[767px]:leading-5 max-[767px]:tracking-[1.5px] max-[767px]:mb-3">Join us in advancing responsible tech everywhere.</p>
                <p className="text-[50px] text-white font-bold max-[479px]:max-w-[290px] max-[479px]:text-[28px] min-[480px]:max-[767px]:max-w-[560px] min-[480px]:max-[767px]:text-[32px] max-[767px]:leading-[1.15] max-[767px]:text-center max-[767px]:mb-3">Request More Information</p>
                <p className="max-w-[430px] text-lg text-opacity-80 text-white text-center mb-[45px] max-[479px]:max-w-[280px] max-[479px]:text-sm min-[480px]:max-[767px]:text-base max-[767px]:leading-6 max-[767px]:mb-7">GoodBot is a catalyst for research and practice in innovative technology governance</p>
                <Link className="min-w-[224px] py-[18px] bg-goodbot-primary text-base text-white rounded-[30px] mb-[50px] flex justify-center items-center hover:bg-goodbot-primary-light transition-colors duration-200 max-[767px]:min-w-[170px] max-[767px]:min-h-11 max-[767px]:px-6 max-[767px]:py-2 max-[767px]:text-sm max-[767px]:mb-8" href="mailto:hello@goodbot.ca">Contact Us</Link>
                <p className="text-sm text-white text-opacity-80 mb-[48px] max-[767px]:text-xs max-[767px]:mb-8">© GoodBot Responsible Repo</p>
            </div>
            <div className="container flex items-center w-full justify-between mt-[48px] max-[767px]:mt-6">
                <Image src='/svg/logo-white.svg' alt="GoodBot Logo" width={179.26} height={42} className="max-[767px]:w-28 max-[767px]:h-auto" />
                <div className="flex items-center gap-4">
                    <Link className="border-2 w-[45px] h-[45px] border-white border-opacity-25 rounded-full flex items-center justify-center" href='https://www.linkedin.com/company/gogoodbot/' target="_blank" rel="noopener noreferrer">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.27279 3.375C3.18284 3.375 3.92058 2.61948 3.92058 1.6875C3.92058 0.75552 3.18284 0 2.27279 0C1.36274 0 0.625 0.75552 0.625 1.6875C0.625 2.61948 1.36274 3.375 2.27279 3.375Z" fill="white" />
                            <path d="M3.64595 4.5H0.899632C0.748035 4.5 0.625 4.626 0.625 4.78125V13.2188C0.625 13.374 0.748035 13.5 0.899632 13.5H3.64595C3.79755 13.5 3.92058 13.374 3.92058 13.2188V4.78125C3.92058 4.626 3.79755 4.5 3.64595 4.5Z" fill="white" />
                            <path d="M11.8288 4.11247C10.655 3.70072 9.18679 4.06241 8.30632 4.71097C8.27612 4.59003 8.16846 4.50003 8.04048 4.50003H5.29416C5.14257 4.50003 5.01953 4.62603 5.01953 4.78128V13.2188C5.01953 13.374 5.14257 13.5 5.29416 13.5H8.04048C8.19208 13.5 8.31511 13.374 8.31511 13.2188V7.15503C8.75892 6.76353 9.3307 6.63866 9.79867 6.84228C10.2524 7.0386 10.5122 7.51785 10.5122 8.15628V13.2188C10.5122 13.374 10.6352 13.5 10.7868 13.5H13.5331C13.6847 13.5 13.8077 13.374 13.8077 13.2188V7.58985C13.7764 5.27853 12.7147 4.42297 11.8288 4.11247Z" fill="white" />
                        </svg>

                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;