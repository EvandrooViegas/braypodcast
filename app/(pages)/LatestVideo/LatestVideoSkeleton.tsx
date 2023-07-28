import { Skeleton } from "@/components/ui/skeleton";

export default function LatestVideoSkeleton() {
    return (
        <div className="flex flex-col gap-4">
            <Skeleton className="w-[200px] h-[50px]" />
            <Skeleton className="full h-[600px]" />
        </div>
    )
}