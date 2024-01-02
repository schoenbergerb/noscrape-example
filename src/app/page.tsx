import Link from "next/link";
import Image from "next/image";
import Headline from "@/components/Headline";
import Obfuscated from "@/components/noscrape/Obfuscated";

export default function Home() {
    return (
        <main className="flex justify-center items-center flex-col gap-8 align-middle h-screen">
            <Image
                src="https://raw.githubusercontent.com/schoenbergerb/noscrape/main/docs/preview.png"
                alt="noscrape"
                width={512}
                height={512}
                style={{width: "auto", height: "auto"}}
                priority
            />

            <Headline/>

            <Obfuscated label="can you scrape this content?" className="text-xl"/>

            <span className="flex gap-2 align-middle items-center">
              <Link href="https://github.com/schoenbergerb/noscrape" className="text-xs" target="_blank">
                <Obfuscated label="Sources"/>
              </Link>

              <span>/</span>

              <Link href="https://github.com/schoenbergerb/noscrape-example" className="text-xs" target="_blank">
                <Obfuscated label="Example-Code (NextJS)"/>
              </Link>
            </span>
        </main>
    );
}
