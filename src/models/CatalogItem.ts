export default class CatalogItem {
  public id: string;
  public name: string;
  public description: string;
  public price: number;
  public image: string;
  public category: string;
  public subCategory: string;
  public brand: string;
  public timestamp: Date;

  constructor(
    id: string,
    name: string,
    description: string,
    price: number,
    image: string,
    category: string,
    subCategory: string,
    brand: string,
    timestamp: Date
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.image = image;
    this.category = category;
    this.subCategory = subCategory;
    this.brand = brand;
    this.timestamp = timestamp;
  }
}
