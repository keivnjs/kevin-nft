require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-etherscan');

module.exports = {
  solidity: '0.8.11',
  defaultNetwork: 'rinkeby',
  networks: {
    rinkeby: {
      url: 'https://rinkeby.infura.io/v3/c9d80abff13c4692ae7f066f0e781dad',
      accounts: [
        '78fc85a2d32280bac3b4e9046e95356efb27b32bddba1378df774267c09e6fa4',
      ],
    },
  },
  etherscan: {
    apiKey: '7GSSQZ6ICXDIICMGJ87QIBSED4R6EJB81Q',
  },
};
