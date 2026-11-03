import React, { useState } from "react";
import TopVoiceCard from "./TopVoiceCard";
import SeeMoreButton from "./SeeMoreButton";
import SeeLessButton from "./SeeLessButton";

const TopVoiceCardList = ({ data }) => {
    const [visibleCount, setVisibleCount] = useState(4);

    const handleSeeMore = () => {
        setVisibleCount((prevCount) => (prevCount === 4 ? 12 : 4));
    };

    if (!data || data.length === 0) return null;
    const showButton = data.length > 4;


    return (
        <div className="flex flex-col gap-4 items-start w-full">
            <h3 className="font-bold text-base uppercase text-goodbot-text-dark">Experts</h3>
            <div className="w-full grid grid-cols-4 grid-rows-1 gap-4">
                {data.slice(0, visibleCount).map(topVoice => (
                    <TopVoiceCard key={topVoice.id} topVoice={topVoice} />
                ))}
            </div>
            {showButton &&
                (visibleCount === 4 ? (<SeeMoreButton onClick={handleSeeMore} />) : <SeeLessButton onClick={handleSeeMore} />)
            }
        </div>
    )
}

export default TopVoiceCardList;