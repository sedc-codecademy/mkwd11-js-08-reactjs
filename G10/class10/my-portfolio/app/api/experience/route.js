import { NextResponse } from "next/server";
import experience from "./data.json";

export async function GET() {
  return NextResponse.json(experience);
}
