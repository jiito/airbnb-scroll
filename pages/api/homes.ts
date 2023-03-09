// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Home } from "../../types/Home";
import { HomeGenerator } from "../../utils/HomeGenerator";
import { unsplash, Unsplash } from "../../utils/Unsplash";

type Data = {
  homes: Home[];
  limit: number;
  size: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const limit = parseInt(req.query.limit as string);
  // get 60 random images
  await unsplash.getImages();
  await unsplash.getImages();

  let homes: Home[] = [];
  for (let i = 0; i < limit; i++) {
    const home = HomeGenerator.generate(unsplash);
    homes.push(home);
    console.log(home.city, home.images);
  }
  res.status(200).json({ homes, limit, size: homes.length });
}
