const port = process.env.HOST_PORT || 9090

module.exports = {
  //plugins: [
  //  'truffle-plugin-verify'
  //],
  //api_keys: {
  //  tronscan: TRONSCANAPIKEY
  //},
  
  networks: {
    mainnet: {
      // Don't put your private key here:
      privateKey: process.env.PRIVATE_KEY_MAINNET,
      /*
Create a .env file (it must be gitignored) containing something like

  export PRIVATE_KEY_MAINNET=4E7FEC...656243

Then, run the migration with:

  source .env && tronbox migrate --network mainnet

      */
      userFeePercentage: 100,
      feeLimit: 1000 * 1e6,
      fullHost: 'https://api.trongrid.io',
      network_id: '1'
    },
    shasta: {
      privateKey: process.env.PRIVATE_KEY_SHASTA,
      userFeePercentage: 50,
      feeLimit: 1000 * 1e6,
      fullHost: 'https://api.shasta.trongrid.io',
      network_id: '2'
    },
    nile: {
      privateKey: 'your key',
      userFeePercentage: 100,
      feeLimit: 1000 * 1e6,
      fullHost: 'https://api.nileex.io',
      solidityNode: 'https://api.nileex.io',
      eventServer: 'https://api.nileex.io',
      network_id: '*'
    },
    dev: {
      // For tronbox/tre docker image
      userFeePercentage: 100,
      privateKey: 'your key',
      userFeePercentage: 0,
      feeLimit: 1000 * 1e6,
      fullHost: 'http://127.0.0.1:' + port,
      network_id: '1337'
    },
    compilers: {
      solc: {
        version: '0.5.14'
      }
    }
  }
}
