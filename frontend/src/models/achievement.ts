import Media from "./media";

export default interface Achievement {
  id: number | string;
  title?: string;
  icon?: Media;
  shortDescription?: string;
}
