import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir, readFile } from "fs/promises";
import path from "path";

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

  // Save project data to lib/projects.json
  const projectsFile = path.join(process.cwd(), "lib", "projects.json");
  let projects = [];
  try {
    const file = await readFile(projectsFile, "utf-8");
    projects = JSON.parse(file);
  } catch {}
  projects.push({
    title,
    description,
    image: `/uploads/${imageName}`,
    createdAt: new Date().toISOString(),
  });
  await writeFile(projectsFile, JSON.stringify(projects, null, 2));

  return NextResponse.json({ message: "Project uploaded successfully!" });
};
