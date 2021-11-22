import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import favicon from '../images/favicon.ico'

const Seo = ({ site, description, lang, meta, image, title, pathname  }) => {
  const metaDescription = description || site.siteMetadata.description
  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={
        canonical
          ? [
              {
                rel: "canonical",
                href: canonical,
              },
            ]
          : []
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: "keywords",
          content: site.siteMetadata.keywords.join(","),
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          [
                {
                  property: "og:image",
                  content: image.src,
                },
                {
                  property: "og:image:width",
                  content: image.width,
                },
                {
                  property: "og:image:height",
                  content: image.height,
                },
                {
                  name: "twitter:card",
                  content: "summary_large_image",
                },
              ] 
        )
        .concat(meta)}
    >
        <link rel="icon" href={favicon} />
    </Helmet>
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  title: "Crypto Watchdog is a free crypto market observer.",
  image: {
    src: "https://raw.githubusercontent.com/Huseyinnurbaki/notes/master/tmp/crypto-watchdog.webp",
    height: 630,
    width: 1200
}
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }),
   pathname: PropTypes.string,
}

export default Seo