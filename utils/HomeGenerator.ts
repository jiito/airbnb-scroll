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
    let city = this.getCity();
    return {
      images,
      pricePerNight,
      avgRating,
      city: city,
      distance: this.getDistance(),
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
    let startDay = Math.floor(Math.random() * 28) + 1;
    let endDay = startDay + Math.floor(Math.random() * (30 - startDay));
    let month = Math.floor(Math.random() * 12) + 1;
    let year = new Date().getFullYear(); // get current year

    // Create date objects
    let startDate = new Date(year, month - 1, startDay);
    let endDate = new Date(year, month - 1, endDay);

    // Convert to English names
    let startString = startDate.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
    });
    let endString = endDate.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
    });

    return `${startString} – ${endString}`;
  }

  private static getDistance(): number {
    return Math.round(Math.random() * 100);
  }

  private static getCity(): City {
    return CITY_LIST[Math.round(Math.random() * (CITY_LIST.length - 1))];
  }
}
