import { NextResponse } from "next/server";
import prisma from "@/libs/db";
export async function GET() {
  try {
    const res = await prisma.user.findMany({});
    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json("Something went wrong");
  }
}
