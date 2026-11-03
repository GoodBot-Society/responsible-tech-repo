'use client'

import { useState } from "react";
import Modal from "./Modal/Modal";

const cardConfig = {
    expert: {
        getName: (data) => `${data.first_name} ${data.last_name}`,
        getInitials: (data) =>
            `${data.first_name?.charAt(0) ?? ""}${data.last_name?.charAt(0) ?? ""}`,
        isTopVoice: true,
    },
    default: {
        getName: (data) => data.name,
        getInitials: () => "",
        isTopVoice: false,
    },
};

export default function SearchCard({ data, type }) {

    const [isOpen, setIsOpen] = useState(false);

    const config = cardConfig[type] ?? cardConfig.default;
    const name = config.getName(data);
    const initials = config.getInitials(data);

    return (
        <div className="flex justify-start items-stretch gap-8 px-6 py-8 border border-zinc-300 rounded">
            {initials ? (
                <div className="w-[104px] bg-goodbot-primary flex-shrink-0 text-2xl text-white flex justify-center items-center">
                    {initials}
                </div>
            ) : (<div className="w-[104px] h-auto bg-black flex-shrink-0"></div>)}

            <div className="flex flex-col gap-4 justify-center items-start">
                <h3 className="text-goodbot-text text-2xl font-bold">{name}</h3>
                <p className="text-goodbot-text text-sm">{data.about}</p>
                <button type="button" onClick={() => setIsOpen(true)} className="text-base font-bold uppercase flex items-center justify-center gap-2 bg-goodbot-button-primary hover:bg-goodbot-button-primary-hover px-2 py-2.5 rounded-md min-w-[116px] shadow">
                    <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.4458 9.5C10.8265 9.5 11.9458 8.38071 11.9458 7C11.9458 5.61929 10.8265 4.5 9.4458 4.5C8.06509 4.5 6.9458 5.61929 6.9458 7C6.9458 8.38071 8.06509 9.5 9.4458 9.5Z" fill="#0F172A" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.110056 7.59038C-0.0368077 7.20873 -0.0366809 6.78563 0.110411 6.40408C1.55458 2.65788 5.1891 0 9.44439 0C13.7018 0 17.3378 2.66051 18.7805 6.40962C18.9274 6.79127 18.9272 7.21437 18.7802 7.59593C17.336 11.3421 13.7015 14 9.44617 14C5.18878 14 1.55278 11.3395 0.110056 7.59038ZM13.4462 7C13.4462 9.20914 11.6553 11 9.44617 11C7.23703 11 5.44617 9.20914 5.44617 7C5.44617 4.79086 7.23703 3 9.44617 3C11.6553 3 13.4462 4.79086 13.4462 7Z" fill="#0F172A" />
                    </svg>

                    Quick look</button>
            </div>
            {isOpen && (
                <Modal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    data={data}
                    isTopVoice={config.isTopVoice}
                />
            )}
        </div>
    )
}