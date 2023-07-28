import Title from "@/components/Title"
import iMe from "@/types/iMe"

type Props = { skills: iMe["skills"] | undefined  }
export default function Skills(props:Props) {
    const { skills } = props
    if(!skills) return null
    return (
        <div className="flex flex-col gap-4">
            <Title title="My Skills" />
            <ul className="flex flex-col gap-2">
            {skills.map(skill => (
                <li className="flex items-center gap-4 text-4xl" key={skill}>
                    <div className="w-4 h-4 bg-neutral-600/40 rounded-full" />
                    <span className="font-bold">{skill}</span>
                </li>
            ))}
        </ul>
        </div>
    )
}