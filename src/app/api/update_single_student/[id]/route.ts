import { NextResponse } from "next/server";
import prisma from "@/libs/db";
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const newStudentData = await request.json();
  const userId = +params.id;
  try {
    const res = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        ...newStudentData,
      },
    });
    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json("Something went wrong");
  }
}
