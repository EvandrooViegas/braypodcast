import iFollowersGrowth from "./iFollowersGrowth";
import iInfo from "./iInfo";
import iSocialMedia from "./iSocialMedia";
import iVideo from "./iVideo";

export default interface iMe {
  name: string;
  description: string;
  avatar: string;
  video?: string;
  skills: string[];
  slogan: string;
  photos: string[]
  best_videos: iVideo[];
  social_medias: iSocialMedia[];
  infos: iInfo[];
  followers_growth?: iFollowersGrowth[];
  _id: string;
  _updatedAt: Date;
  _createdAt: Date;
  _rev: string;
  _type: "me";
}
