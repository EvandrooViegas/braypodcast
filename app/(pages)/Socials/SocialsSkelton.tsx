import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function SocialsSkelton() {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="w-[200px] h-[50px]" />
      <div className="flex gap-4">
        {Array(5)
          .fill(0)
          .map((i) => (
            <Skeleton className="w-[80px] h-[80px]" key={i} />
          ))}
      </div>
    </div>
  );
}
