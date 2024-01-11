"use server"

import { utapi } from "@/server/uploadthing";

export const deleteFile = async(id: string) => {
    const deletes = await utapi.deleteFiles(id)

    return deletes
}