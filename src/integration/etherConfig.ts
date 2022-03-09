import Web3 from 'web3';

//Web3
export const web3 = new Web3(Web3.givenProvider || 'ws://localhost:7545');

//Address of store-contract on the blockchain
export const contractAddress = "";