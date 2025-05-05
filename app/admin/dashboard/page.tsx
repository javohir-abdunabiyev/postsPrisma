import createPost from "@/app/actions/post";
import { getTranslations } from "next-intl/server";
import Form from "next/form";

const page = async () => {
    const t = await getTranslations('admin');
    

    return (
        <div className="flex flex-col gap-[40px] text-center">
            <h1 className="text-[30px] font-bold">{t("createPostTxt")}</h1>
            <div>
                <Form action={createPost}>
                    <div className="flex flex-col gap-[20px] items-center justify-center">
                        <input type="text" name="title" placeholder="title" className="w-[240px] h-[40px] pl-[10px] rounded-[10px] border-[1px]" required />
                        <input type="text" name="content" placeholder="content" className="w-[240px] h-[40px] pl-[10px] rounded-[10px] border-[1px]" required />
                        <button className="w-[240px] h-[40px] rounded-[10px] text-black bg-white cursor-pointer">{t('button')}</button>
                    </div>
                </Form>
            </div>
            <p className="text-[15px] text-gray-500">{t("warningText")}</p>
        </div>
    );
}

export default page;