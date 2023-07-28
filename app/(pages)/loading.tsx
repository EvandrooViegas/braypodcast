import FollowersGrowthSkelton from "./FollowersGrowth/FollowersGrowthSkeleton";
import HomeSkeleton from "./Home/HomeSkeleton";
import LatestVideoSkeleton from "./LatestVideo/LatestVideoSkeleton";
import PhotosSkeleton from "./Photos/PhotosSkeleton";
import SocialsSkelton from "./Socials/SocialsSkelton";
import VideosSkeleton from "./Videos/VideosSkeleton";

export default function Loading() {
  return (
    <div className="flex flex-col gap-4">
      <HomeSkeleton />
      <LatestVideoSkeleton />
      <PhotosSkeleton />
      <VideosSkeleton />
      <FollowersGrowthSkelton />
      <SocialsSkelton />
    </div>
  );
}
