"use server";

import { sanity } from "@/sanity/lib/client";
import iGuest from "@/types/iGuest";
import iArt from "@/types/iGuest";
import iMe from "@/types/iMe";
import iTestimonial from "@/types/iTestimonial";
import iTrustedBy from "@/types/iTrustedBy";
import iVideo from "@/types/iVideo";
import getSanityImage from "@/utils/get-sanity-image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export async function getMeData(): Promise<iMe | null> {
  const data = await sanity.fetch(`*[_type == 'me']{
    ...,
    best_videos[]->,
    guests[]->
  }[0]`);

  if(!data) return null 
  const me:iMe = {
    ...data,
    avatar: getSanityImage(data.avatar),
    photos: data.photos?.map?.((p:SanityImageSource) => getSanityImage(p)),
    best_videos: data.best_videos?.map((v:iVideo) => ({
      ...v,
      banner: v?.banner ? getSanityImage(v.banner) : ""
    })),
    guests: data.guests?.map((g:iGuest) => ({
      ...g,
      img: g?.img ? getSanityImage(g.img) : ""
    })),
    trusted_by: data.trusted_by?.map((e: iTrustedBy) => ({
      ...e,
      avatar: e.avatar ? getSanityImage(e.avatar) : ""
    })),
    testimonials: data.testimonials?.map((e: iTestimonial) => ({
      ...e,
      avatar: e.avatar ? getSanityImage(e.avatar) : ""
    })),
  };
  return me
}
