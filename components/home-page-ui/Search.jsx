"use client";

import React from "react";
import { Search as SearchIcon } from "lucide-react";

const Search = ({ onChange, onSubmit, value }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e)
  }

  return (
    <form className="flex w-full gap-2" onSubmit={handleSubmit}>
      <input onChange={(e) => {
        onChange(e.target.value)
      }} value={value} type="text" placeholder="Search Goodbot ex. Digital Charter Canada" aria-label="Search Goodbot" className="w-full shadow-sm border border-zinc-400 rounded-md px-3 py-1.5 text-sm" />
      <button type="submit" className="text-base font-bold uppercase flex items-center justify-center gap-2 bg-goodbot-button-primary hover:bg-goodbot-button-primary-hover px-2 py-2.5 rounded-md min-w-[116px] shadow"><SearchIcon size={20} />search</button>
    </form>
  );
};

export default Search;


