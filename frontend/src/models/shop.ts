import Address from "./address";
import Coupon from "./coupon";
import Media from "./media";
import Label from "./label";
import OpeningHours from "./opening-hours";
import Review from "./review";
import SocialMedia from "./social-media";
import ShopOwner from "./shop-owner";

export default interface Shop {
  id: number | string;
  shopName?: string;
  shopOwner?: ShopOwner;
  shopHeaderImage?: Media;
  description?: string;
  coordinateLat?: number;
  coordinateLng?: number;
  sustainabilityVision?: string;
  sustainabilityVisionTitle?: string;
  productHighlights?: Media[];
  productHighlightsDescription?: string;
  gallery?: Media[];
  storeVideo?: Media;
  email?: string;
  phone?: string;
  address?: Address;
  label?: Label[];
  socialMedia?: SocialMedia[];
  openingHours?: OpeningHours[];
  reviews?: Review[];
  coupons?: Coupon[];
}
