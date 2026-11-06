"use client";
import { React, useState } from "react";
import Image from "next/image";
import Modal from "@/app/comps/Modal/Modal";

const OrganizationCard = ({ organization }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div
className="flex flex-col gap-2 bg-goodbot-background-light w-full p-3 sm:p-4 rounded-lg border border-goodbot-gray-medium cursor-pointer max-[1059px]:min-h-[144px]"      onClick={() => setIsOpen(true)}
    >
      <div className="flex flex-col gap-2 max-[1059px]:flex-row max-[1059px]:items-center max-[1059px]:gap-3">
        <div className="flex items-start justify-between  w-full max-[1059px]:h-12 max-[1059px]:w-[72px] max-[1059px]:shrink-0 max-[1059px]:items-center max-[1059px]:justify-center max-[1059px]:overflow-hidden max-[1059px]:rounded-md max-[1059px]:bg-slate-50">
          <Image
            src={organization.image_url}
            alt={`${organization.name}'s logo`}
            height={500}
            width={500}
            className="h-10 w-fit max-[1059px]:w-full max-[1059px]:object-contain"
          />
        </div>
        <p className="text-sm font-bold text-goodbot-text-dark max-[1059px]:min-w-0 max-[1059px]:leading-5">{organization.name} </p>
      </div>
      <p className="text-sm line-clamp-3 text-goodbot-text-dark max-[1059px]:leading-5">{organization.about}</p>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onClose={handleClose}
          data={organization}
          isTopVoice={false}
        />
      )}
    </div>
  );
};

export default OrganizationCard;
