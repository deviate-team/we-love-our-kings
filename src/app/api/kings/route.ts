import { NextResponse } from "next/server";
import { getDataFromJson } from "@/utils/file";

export async function GET(request: Request) {
  const res = await fetch("https://raw.githubusercontent.com/deviate-team/we-love-our-kings/dev/src/data/kings.json", {
    headers: {
      'Content-Type': 'application/json',
    }
  })

  const kings = await res.json();

  return NextResponse.json(kings);
}
