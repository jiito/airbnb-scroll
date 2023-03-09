import { City, Home } from "../types/Home";
import { Unsplash } from "./Unsplash";

const CITY_LIST: City[] = [
  {
    name: "Austin",
    state: "Texas",
  },

  {
    name: "Portland",
    state: "Maine",
  },
  {
    name: "Middlebury",
    state: "Vermont",
  },
  {
    name: "San Francisco",
    state: "California",
  },
];

export class HomeGenerator {
  static generate(unsplash: Unsplash): Home {
    let pricePerNight = 100;
    let images = this.getImages(unsplash);
    let avgRating = Math.random() * 5;
    let randomDistance = Math.random() * 100;
    let city = this.getCity();
    return {
      images,
      pricePerNight,
      avgRating,
      city: city,
      location: randomDistance,
      dates: this.getDates(),
    } as Home;
  }
  private static getImages(unsplash: Unsplash): string[] {
    let randomLen = Math.round(Math.random() * 5) + 1;
    return Array(randomLen)
      .fill(0)
      .map(() => unsplash.getRandomImage());
  }
  private static getDates(): string {
    return "Dec 12-14";
  }
  private static getCity(): City {
    return CITY_LIST[Math.round(Math.random() * (CITY_LIST.length - 1))];
  }
}
