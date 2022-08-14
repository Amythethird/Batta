import Media from "./media";

export default interface SocialMedia {
  id: number | string;
  url?: string;
  platform?: string;
  icon?: Media;
}
