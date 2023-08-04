"use client";

import iArt from "@/types/iArt";
import Image from "next/image";
import { useState } from "react";
import ArtDetails from "../ArtDetails";

type Props = { art: iArt | undefined };
export default function Art(props: Props) {
  const { art } = props;
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  if (!art) return null;
  return (
    <div className="w-full h-[500px]">
      <Image src={art.image} alt="Art Image" />
      <span className="text-3xl font-semibold truncate">{art.name}</span>
      <p className="text-sm text-neutral-400 truncate">{art.description}</p>
      <ArtDetails art={art} open={open} close={close} isOpen={isOpen} />
    </div>
  );
}
