import { NextResponse } from "next/server";
import prisma from "@/libs/db";
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const userId = +params.id;
  const res = await prisma.user.delete({
    where: {
      id: userId,
    },
  });
  return NextResponse.json(res);
}
