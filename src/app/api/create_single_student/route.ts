import { NextResponse } from "next/server";
import prisma from "@/libs/db";
export async function POST(request: Request) {
  const studentData = await request.json();
  const res = await prisma.user.create({
    data: studentData,
  });
  return NextResponse.json(res);
}
