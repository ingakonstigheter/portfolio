import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { createProject } from "@/lib/project-data";

export const POST = async (req: NextRequest) => {
  const formData = await req.formData();
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const image = formData.get("image") as File;

  if (!title || !description || !image) {
    return NextResponse.json({ message: "Missing fields." }, { status: 400 });
  }

  // Save image to public/uploads
  const uploadDir = path.join(process.cwd(), "public", "uploads");
  await mkdir(uploadDir, { recursive: true });
  const arrayBuffer = await image.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const imageName = `${Date.now()}_${image.name}`;
  const imagePath = path.join(uploadDir, imageName);
  await writeFile(imagePath, buffer);

  // Save project data to database using Prisma
  const project = await createProject({
    title,
    description,
    image: `/uploads/${imageName}`,
  });

  if (!project) {
    return NextResponse.json(
      { message: "Failed to save project to database." },
      { status: 500 }
    );
  }

  return NextResponse.json({ message: "Project uploaded successfully!" });
};
