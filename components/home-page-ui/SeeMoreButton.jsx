import React from "react";

const SeeMoreButton = ({ onClick }) => {
    return (
        <button onClick={onClick} className="text-sm text-goodbot-primary self-end cursor-pointer font-normal">See More</button>
    )
}

export default SeeMoreButton;