import { NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";

export async function GET(
  request: Request,
  { params }: { params: { name: string } }
) {
  const { name } = params;

  const filePath = path.join(process.cwd(), "./src/data/kings.json");
  const data = await fs.readFile(filePath, "utf8");

  const kings = JSON.parse(data);

  const king = kings.find((king: { name: string }) => king.name === name);

  return NextResponse.json(king);
}
