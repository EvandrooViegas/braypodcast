import Image from "next/image";

type Props = { photo: string }
export default function Photo(props:Props) {
    const { photo } = props
    return (
        <div className="relative w-full h-[455px]">
            <Image className="rounded-md object-center object-cover" src={photo} fill alt="Photo"  />
        </div>
    )
}