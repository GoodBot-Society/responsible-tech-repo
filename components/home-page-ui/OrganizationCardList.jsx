'use client'

import React from "react";
import OrganizationCard from "./OrganizationCard";
import SeeMoreButton from "./SeeMoreButton";
import SeeLessButton from "./SeeLessButton";
import { useState } from "react";

const OrganizationCardList = ({ data }) => {

    const [visibleCount, setVisibleCount] = useState(4);

    const handleSeeMore = () => {
        setVisibleCount((prevCount) => (prevCount === 4 ? 12 : 4));
    };


    if (!data || data.length === 0) return null;

    const showButton = data.length > 4;

    return (
        <div className="flex flex-col gap-4 items-start w-full">
            <h3 className="font-bold text-base uppercase tracking-wide text-goodbot-text-dark">Organizations</h3>
            <div className="w-full grid grid-cols-4 grid-rows-1 gap-4">
                {data.slice(0, visibleCount).map((organization, index) => (
                    <OrganizationCard organization={organization} key={index} />
                ))}
            </div>
            {showButton && (
                visibleCount === 4 ? (<SeeMoreButton onClick={handleSeeMore} />) : <SeeLessButton onClick={handleSeeMore} />
            )}
        </div>
    )
}

export default OrganizationCardList;