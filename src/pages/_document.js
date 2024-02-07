import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;500;600;700;800&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Playfair+Display&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;800&family=Montserrat:wght@400;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;800&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Artifika&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Artifika&family=Sacramento&display=swap"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

// import React from 'react'
// import Document, { Html, Head, Main, NextScript } from 'next/document'
// import { extractCritical } from '@emotion/server'

// export default class MyDocument extends Document {
//   static async getInitialProps(ctx) {
//     const initialProps = await Document.getInitialProps(ctx)
//     const critical = extractCritical(initialProps.html)
//     initialProps.html = critical.html
//     initialProps.styles = (
//       <React.Fragment>
//         {initialProps.styles}
//         <style
//           data-emotion-css={critical.ids.join(' ')}
//           dangerouslySetInnerHTML={{ __html: critical.css }}
//         />
//       </React.Fragment>
//     )

//     return initialProps
//   }

//   render() {
//     return (
//       <Html lang="en">
//         <Head>
//           <style
//             data-emotion-css={this.props.ids.join(' ')}
//             dangerouslySetInnerHTML={{ __html: this.props.css }}
//           />
//         </Head>
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     )
//   }
// }
