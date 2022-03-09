import Web3 from 'web3';
import { web3, contractAddress } from '@/integration/etherConfig';

export default class EtherBridge {
    private contractAddress : string;

    constructor(contractAddress : string) {
        this.contractAddress = contractAddress;
    }

    public async getBalance(address : string) : Promise<number> {
        const contract = new web3.eth.Contract(abi, this.contractAddress);
        const balance = await contract.methods.balanceOf(address).call();
        return balance;
    }
}