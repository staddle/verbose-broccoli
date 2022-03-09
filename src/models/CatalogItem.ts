export default class CatalogItem {
  public id: string;
  public seller: string;
  public buyer: string;
  public name: string;
  public description: string;
  public price: number;
  public image: string;
  public category: number;
  public subCategory: number;
  public timestamp: Date;
  public runtime: number;
  public deposit: number;

  constructor(
    id: string,
    seller: string,
    buyer: string,
    name: string,
    description: string,
    price: number,
    image: string,
    category: number,
    subCategory: number,
    timestamp: Date,
    runtime: number,
    deposit: number
  ) {
    this.id = id;
    this.seller = seller;
    this.buyer = buyer;
    this.name = name;
    this.description = description;
    this.price = price;
    this.image = image;
    this.category = category;
    this.subCategory = subCategory;
    this.timestamp = timestamp;
    this.runtime = runtime;
    this.deposit = deposit;
  }

}
