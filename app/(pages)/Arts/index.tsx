import Art from "@/components/Art";
import Title from "@/components/Title";
import iArt from "@/types/iArt";
import React from "react";

type Props = { arts: iArt[] | undefined }
export default function Videos(props:Props) {
  const { arts } = props
  if(!arts) return null
  return (
    <section className="flex flex-col gap-3" id="arts">
      <Title title="Arts" />
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        {arts.map((art) => (
          <Art key={art.name} art={art}  />
        ))}
      </div>
    </section>
  );
}
