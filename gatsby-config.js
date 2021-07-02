import dotenv from 'dotenv';

const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development';
dotenv.config({ path: `.env.${activeEnv}` });
// eslint-disable-next-line no-console
console.log(`Using environment config: '${activeEnv}'`);

export default {
  siteMetadata: {
    title: 'Inner West Church',
    siteUrl: process.env.SITE_URL,
    titleTemplate: '%s · Everyday church for everyday people following Jesus in everyday life.',
    description:
      'Inner West Church is formed around several missional communities on mission with God, depending on the Spirit, showing and sharing the gospel of Jesus in everyday life',
    url: 'https://innerwestchurch.com.au', // No trailing slash allowed!
    image: '/images/icon.png', // Path to your image you placed in the 'static' folder
    keywords: 'church, kensington, flemington, christian, footscray, travencore, jesus, spirit, bible, biblical, missional, missional communities, soma, city to city, anglican',
    twitterUsername: '@innerwestchurch',
    author: 'Inner West Church',
  },
  flags: {
    FAST_DEV: process.env.GATSBY_FAST_DEV || false,
    PRESERVE_WEBPACK_CACHE: process.env.GATSBY_PRESERVE_WEBPACK_CACHE || false,
    PRESERVE_FILE_DOWNLOAD_CACHE: process.env.GATSBY_PRESERVE_FILE_DOWNLOAD_CACHE || false,
    DEV_SSR: process.env.GATSBY_DEV_SSR || false,
    PARALLEL_SOURCING: process.env.GATSBY_PARALLEL_SOURCING || false,
    FUNCTIONS: process.env.GATSBY_FUNCTIONS || false,
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-youtube-v3',
      options: {
        channelId: ['UC4bTzbezSlfP38jYV1XFnbg'],
        apiKey: 'AIzaSyACJZ7_emAJbZRuCZVjbdcVI2mhh2em4n4', // Optional for public requests
        maxVideos: 5, // Defaults to 50
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_PROJECTID,
        dataset: 'production',
        watchMode: process.env.SANITY_WATCHMODE || false,
        token: process.env.SANITY_TOKEN,
      },
    },
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GA_TRACKINGID,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/images/favicon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-prettier-eslint',
      options: {
        prettier: {
          patterns: [
            // the pattern "**/*.{js,jsx,ts,tsx}" is not used because we will rely on `eslint --fix`
            '**/*.{css,scss,less}',
            '**/*.{json,json5}',
            '**/*.{graphql}',
            '**/*.{md,mdx}',
            '**/*.{html}',
            '**/*.{yaml,yml}',
          ],
        },
        eslint: {
          patterns: '**/*.{js,jsx,ts,tsx}',
          customOptions: {
            fix: true,
            cache: true,
          },
        },
      },
    },
  ],
};
