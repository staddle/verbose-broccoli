import type { AbiItem } from 'web3-utils';
import type { Contract } from 'web3-eth-contract';
import { web3 } from '@/integration/etherConfig';
import type CatalogItem from '@/models/CatalogItem';

export default class EtherBridge {
    private contractAddress : string;
    private abi : AbiItem;
    private contract : Contract;

    constructor(contractAddress : string, abi : AbiItem) {
        this.contractAddress = contractAddress;
        this.abi = abi;
        this.contract = new web3.eth.Contract(this.abi, this.contractAddress);
    }

    public async getItem(id : number) : Promise<string> {
        const item = await this.contract.methods.getItem(id).call();
        console.log(item); //testing
        return item;
    }

    public async getSeller(id : number) : Promise<string> {
        return await this.contract.methods.getSeller(id).call();
    }

    public async getNumItems() : Promise<number> {
        return await this.contract.methods.numItems.call();
    }

    public async getMinimumDepositRatio() : Promise<number> {
        return await this.contract.methods.minimumDepositRatio.call();
    }

    public async getCut() : Promise<number> {
        return await this.contract.methods.cut.call();
    }

    public async transferOwnership(newOwner : string) : Promise<void> {
        await this.contract.methods.transferOwnership(newOwner).send();
    }

    public async setCut(cut : number) : Promise<void> {
        await this.contract.methods.setCut(cut).send();
    }

    public async setMinimumDepositRatio(ratio : number) : Promise<void> {
        await this.contract.methods.setMinimumDepositRatio(ratio).send();
    }

    /**
     * Register the given item to the contract.
     * @param item The CatalogItem to be registered
     */
    public async addItem(item : CatalogItem) : Promise<void> {
        await this.contract.methods.addItem(
            item.name,
            item.description,
            item.price,
            item.image,
            item.category,
            item.subCategory,
            item.timestamp,
            item.runtime
        ).send({ value: item.deposit }, 
            function(receipt: Record<string, unknown>) {
                console.log(receipt.events);
            }
        );
    }

    /**
     * Buy the specified item.
     * @param id Id of the item to be bought
     * @param priceToPay Price that the buyer pays (in wei). priceToPay >= price 
     */
    public async buyItem(id : number, priceToPay : number) : Promise<void> {
        await this.contract.methods.buyItem(id).send({value: priceToPay });
    }

    public async withdraw() : Promise<void> {
        await this.contract.methods.withdraw().send();
    }

    public async donate(amount : number) : Promise<void> {
        await web3.eth.sendTransaction({ to: this.contractAddress, value: amount });
    }
}