import Image from "next/image";
import iGuest from "@/types/iGuest";

type Props = { guest: iGuest | undefined };
export default function Guest(props: Props) {
  const { guest } = props;
  if (!guest) return null;
  return (
    <a href={guest.link} className="flex flex-col gap-4">
      <div className="w-full h-[500px] relative cursor-pointer">
        <Image
          className="object-cover object-center"
          fill
          src={guest.img}
          alt="Guest Image"
        />
      </div>
      <span className="text-2xl font-semibold truncate">{guest?.name}</span>
    </a>
  );
}
