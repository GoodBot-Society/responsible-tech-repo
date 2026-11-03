import React, { useState } from "react";
import { SlidersHorizontal as FilterIcon, ChevronsUp } from 'lucide-react';


const checkboxOptions = [
    {
        title: "CONTENT TYPE",
        options: ['Magazine Article', 'Web Resource', 'Conference Proceeding', 'Journal Article', 'Newspaper Article']
    },
    {
        title: "DISCIPLINE",
        options: ['Business', 'Computer Science', 'Engineering', 'Government', 'Law']
    },
    {
        title: "SUBJECT TERMS",
        options: ['Artificial Intelligence', 'Privacy', 'Data Integrity', 'Bills', 'Personal Information']
    },
]

const radioOptions = [
    {
        title: "PUBLICATION DATE",
        options: ['1 year', '3 years', '5 years', '10 years', 'Custom']
    },
]


const Checkbox = ({ option }) => {
    return (
        <label className="flex gap-4 items-center mt-2">
            <input type="checkbox" className="accent-black" />
            {option}
        </label>
    )
}

const Radio = ({ option }) => {
    return (
        <label className="flex gap-4 items-center mt-2">
            <input type="radio" name="date" className="accent-black" />
            {option}
        </label>
    )
}

const FilterDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={(e) => {
                    e.preventDefault();
                    toggleDropdown();
                }}
                className="shadow text-base font-bold text-sky-900 uppercase flex items-center justify-center gap-2 px-2 py-2.5 rounded-md border border-sky-900 min-w-[116px] hover:bg-zinc-100"
            >
                <FilterIcon size={20} />
                Filter
            </button>

            {isOpen && (
                <div className="flex items-start absolute right-0 mt-2  bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-10">
                    {checkboxOptions.map((checkboxOption, index) => (
                        <div key={index} className="w-[227px]">
                            <h3 className="font-semibold">{checkboxOption.title}</h3>
                            {checkboxOption.options.map((option, i) => (
                                <Checkbox key={i} option={option} />
                            ))}
                        </div>
                    ))}
                    {radioOptions.map((radioOption, index) => (
                        <div key={index} className="w-[227px]">
                            <h3 className="font-semibold">{radioOption.title}</h3>
                            {radioOption.options.map((option, i) => (
                                <Radio key={i} option={option} />
                            ))}
                        </div>
                    ))}


                    <ChevronsUp size={20} onClick={toggleDropdown} className="cursor-pointer" />

                </div>
            )}
        </div>
    );
};

export default FilterDropdown;
