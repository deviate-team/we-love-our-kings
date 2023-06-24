import { NextResponse } from "next/server";
import { getDataFromJson } from "@/utils/file";

export async function GET(
  request: Request,
  { params }: { params: { name: string } }
) {
  const { name } = params;

  const kings = await getDataFromJson("kings");

  const king = kings.find((king: { name: string }) => king.name === name);

  return NextResponse.json(king);
}
