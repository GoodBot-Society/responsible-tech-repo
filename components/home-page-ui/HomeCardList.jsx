import React, { useState } from "react";
import Card from "./Card";
import SeeMoreButton from "./SeeMoreButton";
import SeeLessButton from "./SeeLessButton";

const HomeCardList = ({ title, data, visibleCard }) => {
    const [visibleCount, setVisibleCount] = useState(visibleCard);

    const handleSeeMore = () => {
        setVisibleCount((prevCount) => (prevCount === visibleCard ? 12 : visibleCard));
    };
    return (
        <div className="flex flex-col gap-10 items-start">
            <h2 className="font-bold text-2xl">{title}</h2>
            <div className="grid grid-cols-3 gap-6">
                {data.slice(0, visibleCount).map((card, index) => (
                    <Card key={index} cardData={card} />
                ))}
            </div>
            {visibleCount === visibleCard ? (<SeeMoreButton onClick={handleSeeMore} />) : <SeeLessButton onClick={handleSeeMore} />}
        </div>
    )
}

export default HomeCardList;