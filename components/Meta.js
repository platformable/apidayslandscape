import Script from "next/script";
import Head from "next/head";
export default function Meta() {
    return (
        <>
        <Head>
        <title>The API Landscape</title>
        <meta content="text/html; charset=UTF-8" name="Content-Type" />
        <meta name="description" content="The API Landscape" />
        <meta property="og:url" content="https://apilandscape.apiscene.io/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:description" content="The API Landscape" />
        <meta property="og:title" content="The API Landscape" />
        <meta property="og:image" content="../landscape_social_map.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@APIdaysGlobal" />
        <meta name="twitter:title" content="apidays" />
        <meta name="twitter:description" content="apidays" />
        <meta name="twitter:image" content="../landscape_social_map.png" />
      </Head>
      <Script
        defer
        data-domain="apilandscape.apiscene.io"
        src="https://plausible.io/js/script.js"
      />
        </>
    );
}
