import Head from 'next/head';

export default function SEO({ title, description, url, image }) {
  const siteName = "Youman";
  const defaultTitle = "Unlock your world with youman";
  const defaultDescription = "Youman is more than just access—it’s a lifestyle. Exclusive privileges, premium experiences, and a community that empowers you to reach new heights.";
  const defaultImage = "https://youman.one/images/youman_logo.png";
  const defaultUrl = "https://youman.one/";

  return (
    <Head>
      <title>{title ? `${title} | ${siteName}` : defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={url || defaultUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image || defaultImage} />
    </Head>
  );
}
