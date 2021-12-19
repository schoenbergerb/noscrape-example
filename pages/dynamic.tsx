import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import axios from "axios";

export default function DynamicPage() {
  const [data, setData] = useState<{ value: any; font: string } | null>(null);

  useEffect(() => {
    axios.get("/api/hello").then((res) => {
      setData({ value: res.data, font: res.headers.obfuscation });
    });
  }, []);

  if (data) {
    const fontStyle = `
            @font-face {        
                font-family: 'noscrape-obfuscated';        
                src: url('data:font/truetype;charset=utf-8;base64,${data.font}');    
            }
        `;
    return (
      <div className={styles.container}>
        <Head>
          <title>@noscrape - example 2</title>
          <meta
            name="description"
            content="this is another obfuscation example, can u read this too? 🤔"
          />
          <link rel="icon" href="/favicon.ico" />
          <style>{fontStyle}</style>
        </Head>

        <main className={styles.main}>
          <p className={styles.example2Text}>{data.value.text1}</p>
          <p className={styles.example2Text}>{data.value.text2}</p>
          <p className={styles.example2Text}>{data.value.text3}</p>

          <p className={styles.description}>
            <Link href="/">example 1</Link>
          </p>
        </main>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>@noscrape - example 2</title>
        <meta
          name="description"
          content="this is another obfuscation example, can u read this too? 🤔"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        loading...
        <p className={styles.description}>
          <Link href="/">example 1</Link>
        </p>
      </main>
    </div>
  );
}
