'use client'

import { useState } from "react";
import Modal from "./Modal/Modal";
import Image from "next/image";

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
        <div className="flex h-[256px] justify-start items-stretch gap-6 px-6 py-6 border border-zinc-300 rounded max-[767px]:grid max-[767px]:grid-cols-[64px_minmax(0,1fr)] max-[767px]:grid-rows-[auto_minmax(0,1fr)_auto] max-[767px]:h-[248px] max-[767px]:gap-x-3 max-[767px]:gap-y-3 max-[767px]:p-4">
            {initials ? (
                <div className="flex h-[104px] w-[104px] shrink-0 items-center justify-center rounded-md bg-goodbot-primary text-2xl text-white max-[767px]:h-16 max-[767px]:w-16 max-[767px]:text-lg">
                    {initials}
                </div>
            ) : (
                <div className="flex h-[104px] w-[104px] shrink-0 items-center justify-center rounded-md bg-slate-50 max-[767px]:h-16 max-[767px]:w-16">
                    {data.image_url ? (
                        <Image
                            src={data.image_url}
                            alt={`${name}'s logo`}
                            width={88}
                            height={88}
                            className="h-[88px] w-[88px] object-contain max-[767px]:h-14 max-[767px]:w-14"
                        />
                    ) : (
                        <span className="text-2xl font-bold text-goodbot-text max-[767px]:text-lg">
                            {name?.charAt(0)?.toUpperCase()}
                        </span>
                    )}
                </div>
            )}

            <div className="flex min-w-0 flex-1 flex-col gap-3 items-start max-[767px]:contents">
                <h3 className="min-w-0 text-goodbot-text text-2xl font-bold leading-8 line-clamp-2 break-words max-[767px]:self-center max-[767px]:text-base max-[767px]:leading-5 max-[767px]:line-clamp-4">{name}</h3>
                <p className="text-goodbot-text text-sm leading-5 line-clamp-3 max-[767px]:col-span-2 max-[767px]:self-start">{data.about}</p>
                <button type="button" onClick={() => setIsOpen(true)} className="mt-auto text-base font-bold uppercase flex items-center justify-center gap-2 bg-goodbot-button-primary hover:bg-goodbot-button-primary-hover px-2 py-2.5 rounded-md min-w-[116px] shadow max-[767px]:mt-0 max-[767px]:col-span-2 max-[767px]:justify-self-end max-[767px]:self-end max-[767px]:text-xs max-[767px]:min-w-0 max-[767px]:min-h-11 max-[767px]:px-3 max-[767px]:py-2 max-[767px]:gap-1.5 max-[767px]:shadow-none">
                    <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-[767px]:w-4 max-[767px]:h-3">
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