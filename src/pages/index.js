import React from "react";
import { useStaticQuery, graphql } from 'gatsby';
import BubbleUI from "react-bubble-ui";
import "react-bubble-ui/dist/index.css";
import Bubble from "../components/bubble";
import { Helmet } from 'react-helmet';

const appStyles = {
  pageStyles: {
    color: "#232129",
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
  },
  headingStyles: {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
  },
  bubbleWrap: {
    backgroundColor: '#E2E9F2',
    width: '50%',
    height: 500,
    borderWidth: '1px',
    borderColor: 'red',
    borderRadius: '100%',

  },
  childStyle: {
    width: '100%',
    borderRadius: '50%',
  }
};

const options = {
  size: 170,
  minSize: 70,
  gutter: 0,
  provideProps: false,
  numCols: 9,
  fringeWidth: 10,
  yRadius: 160,
  xRadius: 130,
  cornerRadius: 0,
  showGuides: false,
  compact: true,
  gravitation: 2,
}
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
    }
  `);
  const { allCryptocurrencies } = data;
 


  const children = allCryptocurrencies?.nodes?.map((data, i) => {
    return <Bubble data={data} key={i} style={appStyles.childStyle} />
	});

  return (
    <main style={appStyles.pageStyles}>
      <Helmet>
        <title>Crypto-Watchdog</title>
      </Helmet>
      <title>Home Page</title>
      <h1 style={appStyles.headingStyles}>
        Crypto-Watchdog
        <br />
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>


      <BubbleUI options={options} style={appStyles.bubbleWrap}>
        {children}
      </BubbleUI>

    </main>
  )


}

export default IndexPage