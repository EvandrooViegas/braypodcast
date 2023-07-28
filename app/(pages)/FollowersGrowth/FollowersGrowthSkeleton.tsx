import { Skeleton } from "@/components/ui/skeleton";

export default function FollowersGrowthSkelton() {
    return (
        <div className="flex flex-col gap-4">
            <Skeleton className="w-[200px] h-[50px]" />
            <Skeleton className="w-full h-[350px]" />
        </div>
    )
}