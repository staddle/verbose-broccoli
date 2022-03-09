export const getRandomLoremIpsum = (count: number): string => {
    // return random passage of lorem ipsum
    const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    const words = loremIpsum.split(" ");

    let result = "";
    for (let i = 0; i < count; i++) {
        result += words[Math.floor(Math.random() * words.length)] + " ";
    }
    return result;
}