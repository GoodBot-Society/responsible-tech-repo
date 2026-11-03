import React from 'react';
import Image from 'next/image';


const DataMissingCard = ({ title }) => {
    return (
        <div className='flex flex-col gap-y-8 px-8 py-10 w-full bg-goodbot-background rounded-3xl font-poppins'>
            <h3 className="font-bold text-2xl text-goodbot-primary tracking-wide">{title}</h3>
            <div className='flex gap-2 items-center justify-start'>
                <Image src="/svg/not-found.svg" alt="Data Missing Illustration" width={40} height={40} />
                <div className='text-goodbot-text'>
                    <p className='text-base font-bold uppercase'>There is no data to display at the moment.</p>
                    <p className='text-base font-normal'>We&apos;re still adding more to our database!</p>
                </div>
            </div>
        </div>
    )
}

export default DataMissingCard;