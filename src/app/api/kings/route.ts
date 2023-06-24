import { NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";

export async function GET(request: Request) {
  const filePath = path.join(process.cwd(), "./src/data/kings.json");
  const kings = await fs.readFile(filePath, "utf8");

  return NextResponse.json(JSON.parse(kings));
}
