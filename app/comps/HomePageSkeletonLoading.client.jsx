'use client'

import React from "react";

const Skeleton = ({ className }) => (
    <div className={`bg-gray-200 rounded animate-pulse ${className}`}></div>
);

const HomePageSkeletonLoading = () => {
    return (
        <section className="container relative flex flex-col gap-16">
            <div className="flex flex-col items-center justify-center gap-6 w-full mb-4 pt-32">
                <Skeleton className="h-12 w-[570px]" />
                <div className="flex flex-col items-center justify-center gap-[5px]">
                    <Skeleton className="h-7 w-[750px]" />
                    <Skeleton className="h-7 w-[350px]" />
                </div>
            </div>
            <div className="flex w-full gap-2">
                <Skeleton className="h-10 w-full rounded-md" />
                <Skeleton className="h-10 mb-4 min-w-[116px]" />
                <Skeleton className="h-10 mb-4 min-w-[116px]" />

            </div>
            <hr />
            <section className="flex flex-col gap-10">
                <div className="grid grid-cols-6 gap-4">
                    {[...Array(6)].map((_, i) => (
                        <div className="flex items-center gap-4 min-h-[88px] border border-zinc-300 py-2 px-4 rounded-lg" key={i} >
                            <Skeleton className={`w-7 h-7 flex-shrink-0`} />
                            <div className="flex flex-col items-center justify-center gap-[5px]">
                                <Skeleton className="h-5 w-28" />
                                <Skeleton className="h-5 w-28" />
                                <Skeleton className="h-5 w-28" />
                            </div>
                        </div >

                    ))}
                </div>
                <div className="flex gap-x-4 overflow-auto subcategory-tab-container">
                    <Skeleton className="h-5 w-8" />
                    {[...Array(4)].map((_, i) => (
                        <Skeleton key={i} className="h-5 w-40 text-base whitespace-nowrap px-4 pb-1.5 border-b-2 text-base text-center cursor-pointer;
	}" />
                    ))}
                </div>
                <div className="p-10 bg-[#ecfcff] rounded-3xl font-poppins flex flex-col gap-10 items-start w-full">
                    <div className="flex flex-col gap-10 items-start w-full">
                        <Skeleton className="h-8 w-64 mb-2" />
                        <div className="grid grid-cols-3 gap-4 w-full">
                            {[...Array(3)].map((_, i) => (
                                <Skeleton key={i} className="h-48 w-full rounded-lg" />
                            ))}
                        </div>
                        <div className="grid grid-cols-3 gap-4 w-full mt-4">
                            {[...Array(3)].map((_, i) => (
                                <Skeleton key={i} className="h-48 w-full rounded-lg" />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </section >
    );
};

export default HomePageSkeletonLoading;
