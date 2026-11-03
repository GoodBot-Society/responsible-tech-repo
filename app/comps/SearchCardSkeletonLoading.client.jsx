'use client';

import React from "react";

const Skeleton = ({ className = "" }) => (
    <div
        className={`bg-gray-200 rounded animate-pulse ${className}`}
        aria-hidden="true"
    />
);

const SearchCardSkeleton = () => {
    return (
        <div className="flex justify-start items-stretch gap-8 px-6 py-8 border border-zinc-300 rounded">
            <Skeleton className="w-[104px] min-h-[104px] flex-shrink-0 rounded-none" />
            <div className="flex flex-col gap-4 justify-center items-start w-full">
                <Skeleton className="h-7 w-56" />
                <div className="flex flex-col gap-2 w-full">
                    <Skeleton className="h-4 w-[95%]" />
                    <Skeleton className="h-4 w-[85%]" />
                    <Skeleton className="h-4 w-[65%]" />
                </div>
                <Skeleton className="h-11 w-[116px] rounded-md" />
            </div>
        </div>);
};

export default SearchCardSkeleton;


