const fetch = require('node-fetch');
const NODE_TYPE = "cryptocurrencies"
exports.sourceNodes = async ({ actions, createContentDigest, createNodeId }) => {
    const { createNode } = actions;
    const response = await fetch('http://localhost:3000/crypto-watchdog/cryptocurrencies');
    const result = await response.json() || [];

    result.forEach((node, index) => {
    createNode({
        ...node,
        id: createNodeId(`${NODE_TYPE}-${index}`),
        parent: null,
        children: [],
        internal: {
            type: NODE_TYPE,
            content: JSON.stringify(node),
            contentDigest: createContentDigest(node)
        }
    });
    });
    // cryptos
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