import React from 'react';
import Image from 'next/image';


const DataMissingCard = ({ title }) => {
    return (
        <div className='flex flex-col gap-y-8 px-4 sm:px-8 py-10 w-full bg-goodbot-background rounded-3xl font-poppins max-[767px]:gap-y-5 max-[767px]:py-6'>
            <h3 className="font-bold text-2xl text-goodbot-primary tracking-wide max-[767px]:text-xl max-[767px]:leading-7">{title}</h3>
            <div className='flex gap-2 items-center justify-start max-[767px]:gap-3 max-[767px]:items-start'>
                <Image src="/svg/not-found.svg" alt="Data Missing Illustration" width={40} height={40} className="max-[767px]:w-7 max-[767px]:h-7 max-[767px]:shrink-0 max-[767px]:mt-1" />
                <div className='text-goodbot-text'>
                    <p className='text-base font-bold uppercase max-[767px]:text-sm max-[767px]:leading-5'>There is no data to display at the moment.</p>
                    <p className='text-base font-normal max-[767px]:text-sm max-[767px]:leading-5'>We&apos;re still adding more to our database!</p>
                </div>
            </div>
        </div>
    )
}

export default DataMissingCard;