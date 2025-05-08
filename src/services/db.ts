import fs from "fs/promises";

export const addName = async (name: string) => {
    const names = await readNames();

    var newNames = names + name + ", ";

    await fs.writeFile("src/db/names.txt", newNames);

    return newNames;
};

export const readNames = async () => {
    const names = await fs.readFile("src/db/names.txt", { encoding: "utf-8" });

    return names;
}