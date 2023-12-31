import { NextResponse } from "next/server";
import prisma from "@/libs/db";
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const userId = +params.id;
  try {
    const res = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json("Something went wrong");
  }
}
