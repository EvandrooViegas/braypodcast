import FollowersGrowth from "./FollowersGrowth";
import Home from "./Home";
import Socials from "./Socials";
import Videos from "./Videos";
import { getMeData } from "@/actions/me";
import LatestVideo from "./LatestVideo";
import Arts from "./Arts";
import Photos from "./Photos";
import Skills from "./Skills";
import TrustedBy from "./TrustedBy";

export const revalidate = 15;

export default async function Page() {
  const me = await getMeData();
  const bestVideos = me?.best_videos;
  const socials = me?.social_medias;
  const followersGrowth = me?.followers_growth;
  const video = me?.video
  const photos = me?.photos
  const skills = me?.skills
  const trusted_by = me?.trusted_by
  const arts = me?.arts
  return (
    <main className="flex flex-col gap-12">
      <Home me={me} />
      <LatestVideo link={video} />
      <Skills skills={skills} />
      <Photos photos={photos} />
      <Videos videos={bestVideos} />
      <Arts arts={arts} />
      <FollowersGrowth followersGrowth={followersGrowth} />
      <TrustedBy trusted_by={trusted_by} />
      <Socials socials={socials} />
    </main>
  );
}
