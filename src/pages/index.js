import React from "react";
import { useStaticQuery, graphql } from 'gatsby';
import AllCryptosTable from "../components/allCryptosTable";
import NewCryptosTable from "../components/NewCryptosTable";
import Header from "../components/header";
import { Helmet } from 'react-helmet';
import favicon from '../images/favicon.ico'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      configs {
        id
        configs {
          HOURLY_PERCENTAGE
          DAILY_PERCENTAGE
          COIN_GECKO_PAGE_LIMIT
          BITQUERY_NEW_LISTED_BSC_COINS_ENABLED
        }
  }
      allCryptocurrencies {
        nodes {
          name
          price
          priceChangePercentage1h
          priceChangePercentage24h
          source
          symbol
          id
        }
  }
  allNewcryptos {
    nodes {
      address
      holders
      name
      network
      source
      symbol
    }
  }
    }
  `);
  const { allCryptocurrencies, allNewcryptos } = data;
  return (
    <main>
      <Helmet>
        <title>Crypto-Watchdog</title>
        <link rel="icon" href={favicon} />
      </Helmet>
      <title>Home Page</title>
      <Header />

          <AllCryptosTable data={allCryptocurrencies}  />
          <NewCryptosTable data={allNewcryptos} />
    </main>
  )


}

export default IndexPage