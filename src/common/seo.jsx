import Head from "next/head";

const SEO = ({ pageTitle }) => (
  <>
    <Head>
      <title>
        {pageTitle && `${pageTitle} - Refer Amez Wallet and earn Upto $30 Every Day!`}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content="Share your personalized code, and when friends activate their Amez Wallet with AmezCare Plus Supremium, both you and they receive instant $3 rewards! Track your earnings in the Amez Wallet Transaction History. Join now and start earning together!" />
      <meta name="robots" content="noindex, follow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="icon" href="/favicon.png" />
    </Head>
  </>
);

export default SEO;
