module.exports = {
  siteMetadata: {
    title: `Zeitouni Group`,
    description: ``,
    author: `Avi Zeitouni`,
    siteUrl: `https://www.zeitouni.co.il`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Zeitouni Group`,
        short_name: `Zeitouni`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        crossOrigin: `use-credentials`,
        cache_busting_mode: 'none',
        icon: `src/images/zeitouni_favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        precachePages: [`/`, `/projects/`, `/givat-shmuel/`, `/herzliya/`],
         workboxConfig: {
            globPatterns: ['**/*']
         }
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Heebo`,
            variants: [`400`, `700`, `800`, `900`],
            subsets: [`latin`, `hebrew`]
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        whitelist: ["GOOGLE_MAPS_KEY", "GETFORM_KEY"]
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        sitemapSize: 5000
      }
    }
  ],
}
