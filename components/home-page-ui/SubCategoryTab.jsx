import React from "react";


const SubCategoryTab = ({ label, onClick, isSelected }) => {

    return (
        <button className={`${isSelected ? 'subcategory-btn subcategory-btn--active' : 'subcategory-btn'}`} onClick={onClick}>{label}</button>
    )
}

export default SubCategoryTab;