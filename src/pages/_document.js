import { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body class="bg-white font-sans antialiased">
        <Main />
        <NextScript />
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-2R1R88K0V" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2R1R88K0V');
            `,
          }}
        />
      </body>
    </Html>
  );
}
