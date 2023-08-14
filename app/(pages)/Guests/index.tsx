import Guest from "@/components/Guest";
import Title from "@/components/Title";
import iGuest from "@/types/iGuest";
import React from "react";

type Props = { guests: iGuest[] | undefined }
export default function Guests(props:Props) {
  const { guests } = props
  if(!guests) return null
  return (
    <section className="flex flex-col gap-3" id="guests">
      <Title title="Guests" />
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        {guests.map((guest) => (
          <Guest key={guest.name} guest={guest}  />
        ))}
      </div>
    </section>
  );
}
