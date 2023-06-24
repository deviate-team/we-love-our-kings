import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { name: string } }
) {
  const { name } = params;

  const res = await fetch(
    "https://raw.githubusercontent.com/deviate-team/we-love-our-kings/dev/src/data/kings.json"
  );

  const kings = await res.json();

  const king = kings.find((king: { name: string }) => king.name === name);

  return NextResponse.json(king);
}
