import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { PrismaClient } from "@/app/generated/prisma";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  console.log(userId);

  try {
    const videos = await prisma.video.findMany({
      where: {
        userId: userId,
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(videos);
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching your videos" },
      { status: 500 }
    );
  }
}