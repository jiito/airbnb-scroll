export interface Home {
  images: string[];
  avgRating: number;
  city: City;
  location: number;
  dates: string;
  pricePerNight: number;
}

export type City = {
  name: string;
  state: string;
};
