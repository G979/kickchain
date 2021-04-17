import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined'){
    //we are in the browser and metamask is running
    window.ethereum.enable();
    web3 = new Web3(window.web3.currentProvider);
} else {
    //we are on the server OR the user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/8c8c1eb93bd2443baf2e91c3e7d84641'
    );
    web3 = new Web3(provider);
}

export default web3;
