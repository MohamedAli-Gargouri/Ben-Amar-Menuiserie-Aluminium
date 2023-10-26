import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import Icon from "@/public/Images/Icon.png"
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>Ben Amar Menuiserie Aluminium</title>
      {/* <!-- ALUM TEC ICON --> */}
      <link rel="icon" href="/favicon.png"></link>
      <body>
        <Main />
        <NextScript />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.1.0/mdb.min.js" />
      </body>
    </Html>
  );
}
