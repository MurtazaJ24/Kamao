"use server"

import { db } from "@/server/db";
import { investors, startups } from "@/server/db/schema";
import { writeFile } from "fs/promises";
import path from "path";

export const completeOnboarding = async (data: any, userId: string) => {
  //   const file = data.documentFile as File;
  //   const buffer = Buffer.from(await file.arrayBuffer());

  // // Replace spaces in the file name with underscores
  // const filename = data.documentName.replaceAll(" ", "_");

    // Write the file to the specified directory (public/assets) with the modified filename
    // await writeFile(
    //   path.join(process.cwd(), "public/assets/" + filename),
    //   buffer
    // );

    if (data.userType === "startup") {
        const newStartUp = { ...data, ownerId: userId, documentFile:  "public/assets/" + "hello" };
        await db.insert(startups).values([newStartUp]);
      } else {
        const newInvestor = { ...data, investorId: userId, documentFile:  "public/assets/" + "filename" };
        await db.insert(investors).values([newInvestor]);
      }

}