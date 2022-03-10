import CatalogItem from "@/models/CatalogItem";
import { categories } from "@/assets/categories";
import { getRandomLoremIpsum } from "@/assets/loremIpsum";

export const generateSampleItems = (count: number): CatalogItem[] => {
    const items: CatalogItem[] = [];
    const depositRatio = 1.1;
    for (let i = 0; i < count; i++) {
        const categoryNmb = Math.random() * 8;
        const subCategory = categories[Math.floor(categoryNmb)].subCategories[Math.floor(Math.random() * 3)];
        const price = Math.floor(Math.random() / 100 * 1000000000000000000);
        items.push(new CatalogItem(
            `${i}`, //id
            "0x0000000000000000000000000000000000000000", //seller
            "0x0000000000000000000000000000000000000000", //buyer
            subCategory.name + ` ${i}`, //itemName
            getRandomLoremIpsum(Math.floor(Math.random()*25+10)), //description
            price, //price
            "https://picsum.photos/seed/"+Math.floor(Math.random()*1000)+"/200", //imageUrl
            categories[Math.floor(categoryNmb)].id, //category
            subCategory.id, //subCategory
            new Date(new Date().getTime() - Math.floor(Math.random() * 6000000)), //date
            Math.floor(Math.random() * 100 * 60 * 60 * 1000), //runtime
            price * depositRatio,  //deposit
        ));
    }
    return items;
}

module.exports.generateSampleItems = generateSampleItems;