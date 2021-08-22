import Document, { Head, Html, Main, NextScript } from "next/document";

class CustomDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/icon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
            rel="stylesheet"
          />
          <meta charSet="UTF-8" />
          <meta name="author" content="Mykhailo Penhersky" />
          <meta name="og:type" content="website" />
          <meta name="og:url" content="https://sitename.com" />
          <meta name="og:image" content="" />
          <meta name="og:image:secure_url" content="" />
          <meta name="twitter:card" content="summary" />
          <meta name="theme-color" content="#fff" />
          <meta name="google-site-verification" content="" />
          <link rel="manifest" href="manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
