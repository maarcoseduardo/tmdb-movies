import Document, { Html, Head, Main, NextScript } from 'next/document'
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" /> 
          <link
            rel='shortcut icon'
            type='image/ico'
            href='../../public/favicon.ico'
          />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
