import prisma from "@/lib/prisma";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function Home() {
  const t = await getTranslations('home');
  const posts = await prisma.post.findMany({
    include: {
      author: true
    }
  })
  return (
    <div className="mt-[20px]">
      <h1 className="text-[30px] text-center font-bold mb-[40px]">{t('title')}</h1>
      <div>
        <div className="grid grid-cols-4 gap-[40px]">
          {
            posts.map((post) => (
              <div key={post.id} className="flex gap-[10px] items-center p-[20px] rounded-[10px] border-[1px]">
                <div>
                  <p>{post.author.name}</p>
                  <h2>{post.title}</h2>
                  <p>{post.content}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
