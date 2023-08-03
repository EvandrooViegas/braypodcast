import Title from "@/components/Title";
import truested_by from "@/sanity/schemas/me/trusted_by";
import iTrustedBy from "@/types/iTrustedBy";
import Image from "next/image";
import React from "react";

type Props = { trusted_by: iTrustedBy[] | undefined };
export default function TrustedBy(props: Props) {
  const { trusted_by } = props;
  if (!trusted_by) return null;
  return (
    <div className="flex flex-col gap-4">
      <Title title="Trusted By" />
      <div className="flex gap-4 flex-wrap">
        {trusted_by.map((entity) => (
          <a
            href={entity.link}
            className="flex flex-col items-center gap-2 "
            key={entity.name}
          >
            <div className="relative w-[100px] h-[100px] ">
              <Image src={entity.avatar} fill alt="Entity Avatar" className="object-center object-cover rounded-full" />
            </div>
              <span className="font-bold">{entity.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
