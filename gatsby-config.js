require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.crypto-watchdog.com",
    title: "crypto-watchdog",
    description: "Consumer application of crypo-watchdog. Displays potential pumps and dumps & recentle released coins.",
    author: "Huseyinnurbaki",
    keywords: ["cryptocurrencies", "crypto-watchdog", "cryptos", "coins", "token", "coinmarketcap", "coingecko", "coinmarketcap", "tokensniffer", "poocoin", "bitcoin", "doge", "elon"]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Crypto Watchdog',
        icon: 'src/images/crypto-watchdog.png',
      },
    }
  ],
};
