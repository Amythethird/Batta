export default interface OpeningHours {
  id: number | string;
  dayOfWeek?: number;
  openTime?: string;
  closeTime?: string;
  breakTimeStart?: string[];
  breakTimeEnd?: string[];
}
