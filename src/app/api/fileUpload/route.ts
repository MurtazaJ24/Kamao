import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";

export const runtime = 'nodejs'
// Define the POST handler for the file upload
export const POST = async (req: Request, res: Response) => {
  // Parse the incoming form data
  const formData = await req.formData();

  // Get the file from the form data
  const file = formData.get("file") as File;

  // Check if a file is received
  if (!file) {
    // If no file is received, return a JSON response with an error and a 400 status code
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }

  // Convert the file data to a Buffer
  const buffer = Buffer.from(await file.arrayBuffer());

  // Replace spaces in the file name with underscores
  const filename = file.name.replaceAll(" ", "_");

  try {
    // Write the file to the specified directory (public/assets) with the modified filename
    await writeFile(
      path.join(process.cwd(), "public/assets/" + filename),
      buffer
    );

    // Return a JSON response with a success message and a 201 status code
    return NextResponse.json({ success: true, status: 201, filePath: "public/assets/" + filename });
  } catch (error) {
    // If an error occurs during file writing, log the error and return a JSON response with a failure message and a 500 status code
    console.log("Error occurred ", error);
    return NextResponse.json({ success: false, status: 500 });
  }
};