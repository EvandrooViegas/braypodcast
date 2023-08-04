import iArt from "./iArt";
import iFollowersGrowth from "./iFollowersGrowth";
import iInfo from "./iInfo";
import iSocialMedia from "./iSocialMedia";
import iTestimonial from "./iTestimonial";
import iTrustedBy from "./iTrustedBy";
import iVideo from "./iVideo";

export default interface iMe {
  name: string;
  description: string;
  avatar: string;
  video?: string;
  skills: string[];
  slogan: string;
  photos: string[];
  best_videos?: iVideo[];
  arts: iArt[];
  social_medias: iSocialMedia[];
  trusted_by?: iTrustedBy[];
  infos: iInfo[];
  testimonials: iTestimonial[]
  followers_growth?: iFollowersGrowth[];
  _id: string;
  _updatedAt: Date;
  _createdAt: Date;
  _rev: string;
  _type: "me";
}
