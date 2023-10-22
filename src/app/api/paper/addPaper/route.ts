import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();

    const PaperAndAuthor = await prisma.paper.create({
      data: reqBody,
    });

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      PaperAndAuthor,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
