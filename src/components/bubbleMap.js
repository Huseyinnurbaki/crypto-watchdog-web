import React from "react";
import BubbleUI from "react-bubble-ui";
import Bubble from "./bubble";

const options = {
  size: 180,
  minSize: 50,
  gutter: 10,
  provideProps: false,
  numCols: 9,
  fringeWidth: 120,
  yRadius: 130,
  xRadius: 130,
  cornerRadius: 10,
  showGuides: false,
  compact: true,
  gravitation: 4,
}
const appStyles = {
  bubbleWrap: {
    backgroundColor: 'white',
    width: '90%',
    height: 600,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#F0F0F0',
    borderRadius: '2%',
    alignSelf: 'center'
  },
  childStyle: {
    width: '100%',
    borderRadius: '50%',
  }
};

const BubbleMap = (props) => {
  const { allCryptocurrencies } = props;

  const children = allCryptocurrencies?.nodes?.map((data, i) => {
    return <Bubble data={data} key={i} style={appStyles.childStyle} />
  });


  return (
    <BubbleUI options={options} style={appStyles.bubbleWrap}>
      {children}
    </BubbleUI>
  );
}

export default BubbleMap;