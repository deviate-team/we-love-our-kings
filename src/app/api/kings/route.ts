import { NextResponse } from "next/server";
import { getDataFromJson } from "@/utils/file";

export async function GET(request: Request) {
  const kings = await getDataFromJson("kings");

  return NextResponse.json(JSON.parse(kings));
}
