import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import obfuscate, { EncryptionCharacterRange } from '@noscrape/noscrape'

export async function getStaticProps() {
  const data = {
    headline: "Welcome to noscrape :)",
    textline1: "can you programmatically read this content?",
  };

  const { value, font } = await obfuscate<any>(
    data,
    __dirname + "/../../../public/fonts/example/example.ttf",
    {
      characterRange: EncryptionCharacterRange.HIRAGANA
    },
  );

  return {
    props: {
      value,
      font: font.toString("base64"),
    },
  };
}

const Home: NextPage = ({ value, font }: any) => {
  const fontStyle = `
      @font-face {        
        font-family: 'noscrape-obfuscated';        
        src: url('data:font/truetype;charset=utf-8;base64,${font}');    
      }
  `;

  return (
    <div className={styles.container}>
      <Head>
        <title>@noscrape</title>
        <meta
          name="description"
          content="protection of webcontent, can you programmatically read this content? 🤔"
        />
        <link rel="icon" href="/favicon.ico" />
        <style>{fontStyle}</style>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{value.headline}</h1>

        <p className={styles.description}>{value.textline1}</p>

        <p className={styles.description}>
          <Link href="/dynamic">example 2</Link>
        </p>
      </main>
    </div>
  );
};

export default Home;
