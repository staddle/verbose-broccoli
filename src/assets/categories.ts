export const categories = [
    { 
        id: 1,
        name: "Fruits",
        subCategories: [
            {
                id: 1,
                name: "Apple",
            }, 
            {
                id: 2,
                name: "Banana",
            },
            {
                id: 3,
                name: "Orange",
            },
        ]
    },
    { 
        id: 2,
        name: "Vegetables",
        subCategories: [
            {
                id: 1,
                name: "Cucumber",
            }, 
            {
                id: 2,
                name: "Tomato",
            },
            {
                id: 3,
                name: "Potato",
            },
        ]
    },
    { 
        id: 3,
        name: "Meat",
        subCategories: [
            {
                id: 1,
                name: "Chicken",
            }, 
            {
                id: 2,
                name: "Beef",
            },
            {
                id: 3,
                name: "Pork",
            },
        ]
    },
    { 
        id: 4,
        name: "Dairy",
        subCategories: [
            {
                id: 1,
                name: "Milk",
            }, 
            {
                id: 2,
                name: "Cheese",
            },
            {
                id: 3,
                name: "Yogurt",
            },
        ]
    },
    { 
        id: 5,
        name: "Bakery",
        subCategories: [
            {
                id: 1,
                name: "Bread",
            }, 
            {
                id: 2,
                name: "Pastry",
            },
            {
                id: 3,
                name: "Cake",
            },
        ]
    },
    { 
        id: 6,
        name: "Beverages",
        subCategories: [
            {
                id: 1,
                name: "Juice",
            }, 
            {
                id: 2,
                name: "Tea",
            },
            {
                id: 3,
                name: "Coffee",
            },
        ]
    },
    { 
        id: 7,
        name: "Snacks",
        subCategories: [
            {
                id: 1,
                name: "Gummy",
            },
            {
                id: 2,
                name: "Chocolate",
            },
            {
                id: 3,
                name: "Candy",
            },
        ]
    },
    { 
        id: 8,
        name: "Beverages",
        subCategories: [
            {
                id: 1,
                name: "Juice",
            }, 
            {
                id: 2,
                name: "Tea",
            },
            {
                id: 3,
                name: "Coffee",
            },
        ]
    },
]

export const getRandomCategory = () : string => {
    const category = categories[Math.floor(Math.random() * categories.length)];
    return category.subCategories[Math.floor(Math.random() * category.subCategories.length)].name;
}