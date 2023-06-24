import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const res = await fetch(
    "https://raw.githubusercontent.com/deviate-team/we-love-our-kings/dev/src/data/kings.json"
  );

  const kings = await res.json();

  return NextResponse.json(kings);
}