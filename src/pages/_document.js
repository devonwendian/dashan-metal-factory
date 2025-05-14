import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="alternate" hrefLang="zh" href="https://yourwebsite.com/zh" />
        <link rel="alternate" hrefLang="en" href="https://yourwebsite.com/en" />
        <link rel="alternate" hrefLang="x-default" href="https://yourwebsite.com" />
      </Head>
      <body class="bg-white font-sans antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
