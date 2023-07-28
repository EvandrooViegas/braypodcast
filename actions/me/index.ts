"use server";

import { sanity } from "@/sanity/lib/client";
import iMe from "@/types/iMe";
import iVideo from "@/types/iVideo";
import getSanityImage from "@/utils/get-sanity-image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export async function getMeData(): Promise<iMe | null> {
  const data = await sanity.fetch(`*[_type == 'me']{
    ...,
    best_videos[]->,
  }[0]`);

  if(!data) return null 
  const me:iMe = {
    ...data,
    avatar: getSanityImage(data.avatar),
    photos: data.photos?.map?.((p:SanityImageSource) => getSanityImage(p)),
    best_videos: data.best_videos?.map((v:iVideo) => ({
      ...v,
      banner: v?.banner ? getSanityImage(v.banner) : ""
    }))
  };
  return me
}
