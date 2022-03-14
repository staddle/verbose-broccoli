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

  public static fromContractObject(item: Record<string, string>) : CatalogItem {
    return new CatalogItem(
      item['id'],
      item['seller'],
      item['buyer'],
      item['name'],
      item['description'],
      Number.parseInt(item['price']),
      item['image'],
      Number.parseInt(item['category']),
      Number.parseInt(item['subCategory']),
      new Date(Number.parseInt(item['timestamp'])),
      Number.parseInt(item['runtime']),
      Number.parseInt(item['deposit']),
    );
  }
}
