import { NextResponse } from "next/server";
import prisma from "@/libs/db";
export async function GET() {
  const res = await prisma.user.findMany({});
  return NextResponse.json(res);
}
