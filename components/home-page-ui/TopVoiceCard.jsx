"use client";
import {React,useState} from "react";
import Modal from "@/app/comps/Modal/Modal";
const TopVoiceCard = ({ topVoice }) => {
  const [isOpen, setIsOpen] = useState(false);
  const getInitials = (first = "", last = "") =>
    `${first.charAt(0).toUpperCase() || ""}${
      last.charAt(0).toUpperCase() || ""
    }`;

  return (
    <div className="flex flex-col bg-goodbot-background-light w-full  rounded-lg border border-goodbot-gray-medium overflow-hidden cursor-pointer max-[1059px]:min-h-[192px]" onClick={() => setIsOpen(true)}>
      <div className="flex items-start justify-between w-full relative bg-goodbot-button-primary p-4 max-[1059px]:p-3">
        <div className="flex gap-3 items-start justify-start">
          <div
            className="w-10 h-10 rounded-full bg-goodbot-background-starryNightBlack border border-white flex justify-center items-center text-goodbot-gray-light shadow-md"
            aria-label={`${topVoice.first_name} ${topVoice.last_name}'s initials`}
          >
            {getInitials(topVoice.first_name, topVoice.last_name)}
          </div>
        </div>
      </div>
      <div className="p-4 max-[1059px]:p-3 max-[1059px]:flex-1">
        <p className="text-base font-semibold text-goodbot-text-secondary max-[1059px]:text-goodbot-text-dark max-[1059px]:leading-5">
          {topVoice.first_name} {topVoice.last_name}
        </p>
        <p className="text-sm font-medium text-goodbot-text-disabled max-[1059px]:text-slate-600 max-[1059px]:leading-5">
          {topVoice.title}
        </p>
        <p className="text-sm mt-2 line-clamp-3 text-goodbot-text-dark max-[1059px]:leading-5">
          {topVoice.about}
        </p>
      </div>
      {isOpen&&<Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        data={topVoice}
        isTopVoice={true}
      />}
    </div>

  
  );
};

export default TopVoiceCard;
