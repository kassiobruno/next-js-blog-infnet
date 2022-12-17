import Document, {Html, Head, Main, NextScript} from "next/document";
import AuthProvider from "../contexts/auth";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;900&display=swap" rel="stylesheet"/>
          <link rel="shortcut icon" href="/favicon.png" type="image/png"/>
        </Head>
        <body>
          <AuthProvider>          
          <Main/>
          <NextScript />
          </AuthProvider>
        </body>
      </Html>
    )
  }
}