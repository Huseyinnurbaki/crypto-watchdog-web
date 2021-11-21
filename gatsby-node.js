const fetch = require('node-fetch');
const CRYPTOS_NODE_TYPE = "cryptocurrencies"
const NEW_CRYPTOS_NODE_TYPE = "newcryptos"

exports.sourceNodes = async ({ actions, createContentDigest, createNodeId }) => {
    const { createNode } = actions;
    // cryptos
    const cryptocurrinciesResponse = await fetch('http://localhost:3000/crypto-watchdog/cryptocurrencies');
    const result = await cryptocurrinciesResponse.json() || [];
    result.forEach((node, index) => {
    createNode({
        ...node,
        id: createNodeId(`${CRYPTOS_NODE_TYPE}-${index}`),
        parent: null,
        children: [],
        internal: {
            type: CRYPTOS_NODE_TYPE,
            content: JSON.stringify(node),
            contentDigest: createContentDigest(node)
        }
    });
    });

    // cryptos
    const newCoinsResponse = await fetch('http://localhost:3000/crypto-watchdog/newbies');
    let newCoinsResult = await newCoinsResponse.json();
    if(!newCoinsResult.length) newCoinsResult = dummyModel
    newCoinsResult.forEach((node, index) => {
    createNode({
        ...node,
        id: createNodeId(`${NEW_CRYPTOS_NODE_TYPE}-${index}`),
        parent: null,
        children: [],
        internal: {
            type: NEW_CRYPTOS_NODE_TYPE,
            content: JSON.stringify(node),
            contentDigest: createContentDigest(node)
        }
    });
    });
    // configs
    const configsResponse = await fetch('http://localhost:3000/crypto-watchdog/configs');
    const configs = await configsResponse.json() || {};

        createNode({
            configs,
            id: createNodeId(`configs`),
            parent: null,
            children: [],
            internal: {
                type: 'configs',
                content: JSON.stringify(configs),
                contentDigest: createContentDigest(configs)
            }
        });




    return
};

const dummyModel = [{
    address: "1",
    holders: 1000,
    name: "huscoin",
    network: "bsc",
    source: "none",
    symbol: "hus"
}]
