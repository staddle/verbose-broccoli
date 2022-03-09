import CatalogItem from "@/models/CatalogItem";
import { categories } from "@/assets/categories";
import { getRandomLoremIpsum } from "@/assets/loremIpsum";

export const sampleItems = [
    new CatalogItem("1", "Item 1", "Description 1", 10, "https://picsum.photos/200/200", "Category 1", "Subcategory 1", "Brand 1", new Date()),
    new CatalogItem("2", "Item 2", "Description 2", 20, "https://picsum.photos/200/200", "Category 2", "Subcategory 2", "Brand 2", new Date()),
    new CatalogItem("3", "Item 3", "Description 3", 30, "https://picsum.photos/200/200", "Category 3", "Subcategory 3", "Brand 3", new Date()),
    new CatalogItem("4", "Item 4", "Description 4", 40, "https://picsum.photos/200/200", "Category 4", "Subcategory 4", "Brand 4", new Date()),
    new CatalogItem("5", "Item 5", "Description 5", 50, "https://picsum.photos/200/200", "Category 5", "Subcategory 5", "Brand 5", new Date()),
    new CatalogItem("6", "Item 6", "Description 6", 60, "https://picsum.photos/200/200", "Category 6", "Subcategory 6", "Brand 6", new Date()),
    new CatalogItem("7", "Item 7", "Description 7", 70, "https://picsum.photos/200/200", "Category 7", "Subcategory 7", "Brand 7", new Date()),
    new CatalogItem("8", "Item 8", "Description 8", 80, "https://picsum.photos/200/200", "Category 8", "Subcategory 8", "Brand 8", new Date()),
    new CatalogItem("9", "Item 9", "Description 9", 90, "https://picsum.photos/200/200", "Category 9", "Subcategory 9", "Brand 9", new Date()),
    new CatalogItem("10", "Item 10", "Description 10", 100, "https://picsum.photos/200/200", "Category 10", "Subcategory 10", "Brand 10", new Date()),
];

export const generateSampleItems = (count: number): CatalogItem[] => {
    const items: CatalogItem[] = [];
    for (let i = 0; i < count; i++) {
        const categoryNmb = Math.random() * 8;
        const subCategory = categories[Math.floor(categoryNmb)].subCategories[Math.floor(Math.random() * 3)].name;
        items.push(new CatalogItem(
            `${i}`, //id
            subCategory + ` ${i}`, //itemName
            getRandomLoremIpsum(Math.floor(Math.random()*25+10)), //description
            Math.floor(Math.random() * 100), //price
            "https://picsum.photos/seed/"+Math.floor(Math.random()*1000)+"/200", //imageUrl
            categories[Math.floor(categoryNmb)].name, //category
            subCategory, //subCategory
            `Brand ${i}`, //brand
            new Date(new Date().getTime() - Math.floor(Math.random() * 6000000)) //date
        ));
    }
    return items;
}