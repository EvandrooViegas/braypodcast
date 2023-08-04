import iTestimonial from "@/types/iTestimonial";
import Image from "next/image";

type Props = { testimonial: iTestimonial | undefined }
export default function Testimonial(props:Props) {
    const { testimonial } = props
    if(!testimonial) return null
    return (
        <div className="flex flex-col items-center p-5 border border-neutral-300 border-dashed">
            <div className="relative w-[100px] h-[100px]">
                <Image src={testimonial.avatar} className="rounded-full object-cover object-center" alt="Avatar" /> 
            </div>
            <span className="text-3xl">{testimonial.name}</span>
            <p className="text-sm italic text-neutral-700">{`"`}{testimonial.message}{`"`}</p>
        </div>

    )
}