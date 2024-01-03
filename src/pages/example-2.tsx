import {Noscrape} from "@noscrape/noscrape";
import Head from "next/head";

export async function getServerSideProps() {
    const noscrape = new Noscrape("public/example.ttf")

    // Fetch data from external API or DB, whatever...
    const data = {
        title: "this is a example",
        description: "obfuscate with noscrape"
    }


    // Pass data to the page via props
    return {
        props: {
            data: noscrape.obfuscate(data),
            font: noscrape.getFont().toString('base64')
        }
    }
}

type Props = {
    data: {
        title: string;
        description: string;
    };
    font: Buffer;
}

export default function Example2({data, font}: Props) {
    const fontStyle = `
      @font-face {        
        font-family: 'noscrape-obfuscated';        
        src: url('data:font/truetype;charset=utf-8;base64,${font}');    
      }
      
      .obfuscated {
        font-family: 'noscrape-obfuscated';      
      }
    `


    return <>
        <Head>
            <title>pages router example</title>
            <style>{ fontStyle }</style>
        </Head>
        <div className="text-center">
            <h1 className="obfuscated text-xl lg:text-3xl">{ data.title }</h1>
            <h4 className="obfuscated">{ data.description }</h4>
        </div>
    </>
}
