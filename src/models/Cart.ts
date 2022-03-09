import type CatalogItem from "@/models/CatalogItem";

export default class Cart {
    private items: CatalogItem[];
    
    constructor() {
        this.items = [];
    }

    //GETTERS
    public get fullCart(): CatalogItem[] {
        return this.items;
    }

    public get totalPrice(): number {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    public get itemCount(): number {
        return this.items.length;
    }

    //METHODS
    public add(item: CatalogItem) {
        this.items.push(item);
    }
    
    public remove(item: CatalogItem) {
        this.items.splice(this.items.indexOf(item), 1);
    }
    
    public removeById(id: string) {
        this.items.splice(this.items.findIndex(item => item.id === id), 1);
    }    

    public specificItem(id: string): CatalogItem | undefined {
        return this.items.find(item => item.id === id);
    }
}