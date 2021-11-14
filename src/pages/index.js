import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const tableStyle =  {
  fontFamily: 'arial',
  border: 'collapse',
  width: '100%'
}

const rows = {
  border: '1px solid #dddddd',
  text: 'align-left',
  padding: '8px'
}



const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
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
  console.log(data);
  const { allCryptocurrencies } = data;
  return (
    <main style={pageStyles}>
      <Helmet>
        <title>Crypto-Watchdog</title>
      </Helmet>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        Crypto-Watchdog
        <br />
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      <table style={tableStyle} >
      <tr>
        <th  style={rows}  >Name</th>
        <th  style={rows} >Source</th>
        <th  style={rows} >Symbol</th>
        <th style={rows} >Price Change in 1h</th>
        <th style={rows} >Price Change in 24h</th>
        <th style={rows} >Current Price</th>
      </tr>
        {allCryptocurrencies.nodes.map((item, index) => {
          return (
            <tr>
              <td style={rows}>{item.name}</td>
              <td style={rows}>{item.source}</td>
              <td style={rows}>{item.symbol}</td>
              <td style={rows}>{item.priceChangePercentage1h}</td>
              <td style={rows}>{item.priceChangePercentage24h}</td>
              <td style={rows}>{item.price}</td>
            </tr>
          )
        })}
      </table>
    </main>
  )
}

export default IndexPage
