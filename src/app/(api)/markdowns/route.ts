import { NextRequest, NextResponse } from "next/server";
import markdownParser from "lib/markdownParser";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const data = await markdownParser();
    const result = data;
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(error);
  }
}
