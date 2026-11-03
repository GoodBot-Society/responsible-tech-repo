import React from "react";


const CategoryTab = ({ data, onClick, isSelected }) => {
    return (
        <div className={`${isSelected ? "category-btn category-btn--active" : "category-btn"}`} onClick={onClick} >
            <svg className={`w-6 h-6 flex-shrink-0 fill-current`}>
                <use className="fill-current" xlinkHref={`/svg/category-tab-icons.svg#${data.id}`}></use>
            </svg>
            <p className="text-sm">{data.name}</p>
        </div >
    )
}

export default CategoryTab;