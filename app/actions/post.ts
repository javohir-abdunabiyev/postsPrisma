"use server";
import { cookies } from "next/headers";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function createPost(formData: FormData) {
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    const cookieStore = await cookies();
    const email = cookieStore.get("email")?.value;

    const author = await prisma.user.findUnique({
        where: {
            email: email,
        },
    });

    if (!author) {
        throw new Error("Автор не найден");
    }

    await prisma.post.create({
        data: {
            title,
            content,
            published: true,
            authorId: author.id,
        },
    });

    revalidatePath("/posts");
    redirect("/");
}

export default createPost;
