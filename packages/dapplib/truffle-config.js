require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom clog other security notice birth mean proud inflict pet tackle spot'; 
let testAccounts = [
"0x13380357c6ae861c49126cd23bf35e2102070e1341bd2fdbe8b8ef1cd2f863bb",
"0x5976d3b8269634daac057690b90531b8b35413b9be658e051d1d0d43ce59768a",
"0x77ca829c7964cfd2401ef740d6d56428b36dd77b915c5c62a528d3bc57da8c47",
"0x33747937b12ac0665e217d905a7b2ae36c857c02bd4b82a1f018c3b8d1a58f8b",
"0x736dca7f73d73725bf39ad44294f366910467439761be9f70e52ba033f56a250",
"0x873e280a31bb551156b7d3e5ef8e6f25bc118ecc59fce50552f5be3a26eed2eb",
"0x9f26a91e216c58aa660ee26ed69fcf90026ac9f25525d70750222a737c7f890d",
"0x0efc2ca95e5d150c27aee8a68cc0658a139087ae96b6169432a90453fabd64a6",
"0x84f4a80b3e692b7d5e0c1f1f5043af581c7be7dcf8fd8017928bc49bf269f3ab",
"0x269366ac961897a880d1823cd247e281e223abb2eed0be110dccc60e7f1a6291"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
