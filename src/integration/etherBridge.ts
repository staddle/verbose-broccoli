import type { AbiItem } from 'web3-utils';
import type { Contract } from 'web3-eth-contract';
import CatalogItem from '@/models/CatalogItem';
import broccoli from '../../ethereum-contract/build/contracts/broccoli.json';
export default class EtherBridge {
    private contractAddress : string;
    private abi : Record<string, unknown>;
    private contract : Contract;

    static async deploy() : Promise<EtherBridge> {
        //deploy contract broccoli and return instance of EtherBridge
        const abi = broccoli.abi;
        const contractAddress = await new web3.eth.Contract(abi).deploy({
            data: broccoli.bytecode
        }).send({
            from: web3.eth.defaultAccount
        })
        .on('error', function(error){ 
            console.log(error);
        })
        .on('transactionHash', function(transactionHash){ 
            console.log(transactionHash);
        })
        .on('receipt', function(receipt){
           console.log(receipt.contractAddress) // contains the new contract address
        })
        .on('confirmation', function(confirmationNumber, receipt){ 
            console.log(confirmationNumber, receipt);
        })
        .then(function(newContractInstance) {
            return new EtherBridge(newContractInstance.options.address, abi);
        });
    }

    constructor(contractAddress : string, abi : Record<string, unknown>) {
        this.contractAddress = contractAddress;
        this.abi = abi;
        this.contract = new web3.eth.Contract(this.abi, this.contractAddress);
    }

    public async getItem(id : number) : Promise<CatalogItem> {
        const item = await this.contract.methods.getItem(id).call();
        console.log(item);
        return CatalogItem.fromContractObject(item);
    }

    public async getSeller(id : number) : Promise<string> {
        return await this.contract.methods.getSeller(id).call();
    }

    public async getNumItems() : Promise<number> {
        return await this.contract.methods.numItems.call();
    }

    public async getPendingWithdrawal() : Promise<number> {
        return await this.contract.methods.pendingWithdrawal.call();
    }

    public async getItemsOnSale() : Promise<CatalogItem[]> {
        /*const numItems = await this.contract.methods.numItems.call();
        const items = await Promise.all(
            Array.from(Array(numItems).keys()).map(id => this.getItem(id))
        )*/
        const itemsOnSale = await this.contract.methods.getItemsOnSale().call();
        const items = itemsOnSale.map((item: Record<string, string>) => CatalogItem.fromContractObject(item));
        return items;
    }

    public async getItemsOnHold() : Promise<CatalogItem[]> {
        /*const numItems = await this.contract.methods.numItems.call();
        const items = await Promise.all(
            Array.from(Array(numItems).keys()).map(id => this.getItem(id))
        )*/
        const itemsOnHold = await this.contract.methods.getItemsOnHold().call();
        const items = itemsOnHold.map((item: Record<string, string>) => CatalogItem.fromContractObject(item));
        return items;
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

    public async markItemAsReceived(id : number) : Promise<void> {
        await this.contract.methods.markItemAsReceived(id).send();
    }

    public async withdraw() : Promise<void> {
        await this.contract.methods.withdraw().send();
    }

    public async donate(amount : number) : Promise<void> {
        await web3.eth.sendTransaction({ to: this.contractAddress, value: amount });
    }
}