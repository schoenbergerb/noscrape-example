import Obfuscated from "@/components/noscrape/Obfuscated";
import Image from "next/image";
import Headline from "@/components/Headline";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col gap-8 align-middle h-screen">
      <Image
        src={
          "https://raw.githubusercontent.com/schoenbergerb/noscrape/main/docs/preview.png"
        }
        alt={"noscrape"}
        width={512}
        height={512}
        style={{ width: "auto", height: "auto" }}
        priority
      />
      <Headline />
      <span>
        <Obfuscated label="can you scrape this contents?" />
      </span>
      <Link
        href="https://github.com/schoenbergerb/noscrape"
        target="_blank"
        className="text-xs"
      >
        <Obfuscated label={"Sources on Github"} />
      </Link>
    </main>
  );
}
