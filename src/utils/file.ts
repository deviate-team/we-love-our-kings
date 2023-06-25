import fs from "fs/promises";
import path from "path";

export const getDataFromJson = async (fileName: string) => {
    const filePath = path.join(process.cwd(), `./src/data/${fileName}.json`);
    const data = await fs.readFile(filePath, "utf-8");
    
    return JSON.parse(data);
};