export interface Home {
  images: string[];
  avgRating: number;
  city: City;
  distance: number;
  dates: string;
  pricePerNight: number;
}

export type City = {
  name: string;
  state: string;
};
