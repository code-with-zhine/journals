import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { id, previewUrl } = reqBody;

    const updatedData = await prisma.paper.update({
      where: { id: id },
      data: { previewUrl: previewUrl },
    });

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      updatedData,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
