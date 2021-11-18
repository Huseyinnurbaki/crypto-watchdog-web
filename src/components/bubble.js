import React from "react";
import { getRandomColor, isDark } from '../utils/randomColorGenerator';

export default function Bubble(props) {
const {data} = props;

let color = getRandomColor();
const isGeneratedColorDark = isDark(color)
  return (
    <div
      style={{
        backgroundColor: color,
        // backgroundColor: color+ "d0",
        borderRadius: '50%',
      }}
      className="Bubble"
    >

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            transition: "opacity 0.1s ease",
            opacity: 1,
            pointerEvents: "none",
          }}
        >
          <img
            src={`https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579`}
            alt="coin"
            style={{
              width: 50,
              borderRadius: `50%`,
              marginBottom: 10,
            }}
          ></img>
          <p
            style={{
              color: isGeneratedColorDark ? 'white' : 'black',
              fontSize: 14,
              marginBottom: 6,
              fontWeight: 1000,
              maxWidth: 150,
              minWidth: 150,
              textAlign: "center",
              whiteSpace: "pre-wrap"
            }}
          >
            {data.name}<br/>{data.price}<br/>1h% {data.priceChangePercentage1h}
          </p>
          <p
            style={{
              color: isGeneratedColorDark ? 'white' : 'black',
              fontSize: 15,
              marginBottom: 5,
              maxWidth: 100,
              opacity: 0.8,
              fontWeight: '600'
            }}
          >
            {data.symbol}
          </p>
        </div>

    </div>
  );
}