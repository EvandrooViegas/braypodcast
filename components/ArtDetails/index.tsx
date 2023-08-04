"use client";

import iArt from "@/types/iArt";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  art: iArt;
  isOpen: boolean;
  open: () => void;
  close: () => void;
};
export default function ArtDetails(props: Props) {
  const { art, isOpen, open, close } = props;
  const [isImageScaledUp, setIsImageScaledUp] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null)
  const handleWindowClick = (e:MouseEvent) => {
    if(!containerRef.current) return 
    const containerRect = containerRef.current?.getBoundingClientRect()
    if (
      e.clientX < containerRect?.left ||
      e.clientX > containerRect?.right || 
      e.clientY < containerRect?.top || 
      e.clientY > containerRect?.bottom
    ) {
      close()
    }
  }
  useEffect(() => {
    if (art && isOpen) {
      window.addEventListener("click", handleWindowClick)
      window.document.body.classList.add("overflow-hidden");
    }
    return () => {
      window.removeEventListener("click", handleWindowClick)
      window.document.body.classList.remove("overflow-hidden");
    };
  }, [art, isOpen, containerRef]);
  if (!isOpen) return;
  if (!art) return;
  return (
    <div className="fixed art-modal-index inset-0 bg-black/60">
      <div className="full flex center">
        <div className="flex flex-col gap-4 min-w-[80vw]" ref={containerRef}>
          <div
            onClick={() => setIsImageScaledUp(!isImageScaledUp)}
            className="relative w-full h-[400px] bg-black/90"
          >
            <Image
              fill
              src={art.img}
              className={`
              transition-all mx-auto object-center object-contain 
              ${isImageScaledUp ? "cursor-zoom-out" : "cursor-zoom-in"}
              ${isImageScaledUp ? "scale-150" : "scale-100"}
             `}
              alt="Art"
            />
          </div>
          <span>{art?.name}</span>
          <p className="max-h-[400px] overflow-auto">{art?.description}</p>
        </div>
      </div>
    </div>
  );
}
