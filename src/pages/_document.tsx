import {Html, Head, Main, NextScript } from "next/document";



export default function Document() {


    return (
        <Html lang="en" className="h-full">
            <Head />
            <body className="bg-black text-white flex h-full items-center justify-center">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}