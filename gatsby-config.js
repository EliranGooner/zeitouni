module.exports = {
  siteMetadata: {
    title: `Zeitouni Group`,
    description: ``,
    author: `Avi Zeitouni`,
    siteUrl: `https://www.zeitouni.co.il`,
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
        background_color: `#808080`,
        theme_color: `#808080`,
        display: `minimal-ui`,
        crossOrigin: `use-credentials`,
        cache_busting_mode: "none",
        icon: `src/images/zeitouni_favicon.png`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        whitelist: ["GOOGLE_MAPS_KEY", "GETFORM_KEY"],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        sitemapSize: 5000,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-SBPKETQ935",
        head: true,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.zeitouni.co.il",
        sitemap: "https://www.zeitouni.co.il/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-plugin-transition-link`,
  ],
}
