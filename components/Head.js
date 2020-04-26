import Head from 'next/head'

const site = process.env.SITE_METADATA

const HeadMetadata = ({ title, path, description, image }) => (
  <Head>
    <title>{title}</title>
    <link rel="icon" href="/favicon.ico" />
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="description"         content={description} />
    <meta name="image"               content={`${site.origin}${image.name}`} />
    <meta property="og:site_name"    content={site.name}/>
    <meta property="og:url"          content={`${site.origin}${path}`} />
    <meta property="og:title"        content={title} />
    <meta property="og:description"  content={description} />
    <meta property="og:image"        content={`${site.origin}${image.name}`} />
    <meta property="og:image:width"  content={image.width} />
    <meta property="og:image:height" content={image.height} />
    <meta name="twitter:card"        content="summary_large_image" />
    <meta name="twitter:title"       content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image"       content={`${site.origin}${image.name}`} />
  </Head>
)

export default HeadMetadata