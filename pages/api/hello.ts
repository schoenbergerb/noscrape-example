import obfuscate from "@noscrape/noscrape";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  text1: string;
  text2: string;
  text3: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = {
    text1: "this text was obfuscated on the server",
    text2: "fetched via axios request",
    text3: "and rendered via next functional component",
  };

  const { value, font } = await obfuscate<any>(
    data,
    __dirname + "/../../../../public/fonts/example/example.ttf",
    { strength: 10 }
  );

  return res
    .status(200)
    .setHeader("obfuscation", font.toString("base64"))
    .json(value);
}
