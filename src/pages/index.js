import React from "react";
import { useStaticQuery, graphql } from 'gatsby';
import AllCryptosTable from "../components/allCryptosTable";
import NewCryptosTable from "../components/newCryptosTable";
import Header from "../components/header";
import Seo from "../components/seo"
import Layout from "../components/layout";

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
    <Layout>
      <Seo />
      <title>Home Page</title>
      <Header />
      <main>
        <AllCryptosTable data={allCryptocurrencies} />
        <NewCryptosTable data={allNewcryptos} />
      </main>
      {/* <footer></footer> */}
    </Layout>
  )
}

export default IndexPage;