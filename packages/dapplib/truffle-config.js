require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt nasty success system normal note screen company install lock symptom genuine'; 
let testAccounts = [
"0xff217bd7e13d24aeaa963cc5aba5408b74a7a7bc7449463cd974954a32b8d3dc",
"0xc73cd3479e0037658e0cb00083e98aca2be42ae477d4910e7a7a024262167d7d",
"0x7800cafc8f6c33642220f7941e34efa3b108400895a6cfcb4d7ad65e58fce63e",
"0xc97a8c447d4c96cac4b80d24596d94673d35841eea47c7824e28f904daca6faa",
"0xe5d9427224b12441aa9d9feab6cc57781a82f7611be5a3f43793cbf55b580092",
"0x9d182a97fc3e08ffad754517b07f0edb0237569c96b12c15466ca05eb941d755",
"0x93ecdd67d77a606d9af3535bb84cad23e6dd405759a0da575841a139459491ff",
"0x1632bc2f477850f6dbc4a9b52ea87cd884563095e712be0f485ce0eab86efd35",
"0xb9b6a5be1a89f8815d13e836bc6bf8bb0f65e4fdd601746de1564d264395709b",
"0x653d4b2b0ec95ead934261d30c82278bba5a2e07eea8c5885256664bd01657d1"
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
            version: '^0.8.0'
        }
    }
};

