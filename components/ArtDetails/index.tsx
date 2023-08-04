"use client";

import iArt from "@/types/iArt";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type Props = {
  art: iArt;
  isOpen: boolean;
  open: () => void;
  close: () => void;
};
export default function ArtDetails(props: Props) {
  const { art, isOpen, open, close } = props;
  const [isImageScaledUp, setIsImageScaledUp] = useState(false);
  useEffect(() => {
    if (art && isOpen) {
      window.document.body.classList.add("overflow-hidden");
    }
    return () => {
      window.document.body.classList.remove("overflow-hidden");
    };
  }, [art]);
  if (!isOpen) return;
  if (!art) return;
  return (
    <div className="fixed inset-0 bg-black/60">
      <div className="full flex center">
        <div className="p-12 flex flex-col gap-4">
          <div
            onClick={() => setIsImageScaledUp(!isImageScaledUp)}
            className="relative w-full h-[400px] bg-black"
          >
            <Image
              src={art.image}
              className={`
              transition-all mx-auto object-center object-contain 
              ${isImageScaledUp ? "cursor-zoom-out" : "cursor-zoom-in"}
              ${isImageScaledUp ? "scale-150" : "scale-100"}
             `}
              alt="Art"
            />
          </div>
          <span>{art.name}</span>
          <p className="max-h-[400px] overflow-auto">{art.description}</p>
        </div>
      </div>
    </div>
  );
}
