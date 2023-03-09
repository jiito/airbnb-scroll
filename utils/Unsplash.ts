import axios from "axios";

export class Unsplash {
  imageUrls: string[] | undefined;

  constructor() {
    this.imageUrls = [];
  }

  async getImages(count = 30) {
    if (this.images!.length > 30) {
      return;
    }
    const API_URL = `https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_API_KEY}&query=house&count=${count}`;
    const { data } = await axios.get(API_URL);
    this.imageUrls = [...this.imageUrls!, ...data.map((i: any) => i.urls.raw)];
  }
  get images() {
    return this.imageUrls;
  }
  getRandomImage() {
    if (this.images!.length === 0) {
      throw new Error("No images available");
    }
    const randomIndex = Math.round(Math.random() * (this.images!.length - 1));
    return this.images![randomIndex];
  }
}
export const unsplash = new Unsplash();
