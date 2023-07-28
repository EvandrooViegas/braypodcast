import Title from "@/components/Title";
import YouTube from "@/components/Youtube";
import getYoutubeVideoId from "@/utils/get-yotube-video-id";
import React from "react";
type Props = {
  link: string | undefined;
};
export default function LatestVideo(props: Props) {
  const { link } = props;
  if (!link) return null;
  const videoId = getYoutubeVideoId(link);
  return (
    <div className="flex flex-col gap-4">
      <Title title="Latest Youtube Video" />
      <YouTube 
      className="rounded-md bg-muted"
      videoId={videoId} 
      opts={{ width: '100%', height: "600" }} 
      />
    </div>
  );
}
