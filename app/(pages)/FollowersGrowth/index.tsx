"use client";

import iFollowersGrowth from "@/types/iFollowersGrowth";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { useMemo } from "react";
import getCSSrootVariable from "@/utils/get-css-root-variable";
import Title from "@/components/Title";
type Props = {
  followersGrowth: iFollowersGrowth[] | undefined;
};
export default function FollowersGrowth(props: Props) {
  const { followersGrowth } = props;
  const primaryColor = getCSSrootVariable("--primary");

  const growthData = useMemo(
    () =>
      followersGrowth?.map((growth) => ({
        name: growth.date,
        total: growth.value,
      })),
    [followersGrowth]
  );
  if (!growthData) return null;
  return (
    <div className="flex flex-col gap-4">
      <Title title="Followers Growth" />
      <ResponsiveContainer width="100%" height={350}>
      <BarChart data={growthData}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Bar
          dataKey="total"
          fill={primaryColor || "#ddd"}
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
    </div>
  );
}
