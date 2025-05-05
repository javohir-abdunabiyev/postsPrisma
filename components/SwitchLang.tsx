"use client"
import { useRouter } from "next/navigation";

interface CookieValues {
    locale?: string;

}

const SwitchLang = () => {
    const router = useRouter();

    const handleLangChange = (locale: string): void => {
        document.cookie = `locale=${locale}; path=/;`;
        router.refresh();
    }

    return (
        <div className="flex gap-[10px] items-center">
            <button onClick={() => handleLangChange("ru")} className="w-[30px] bg-white text-black rounded-[8px] border-0 cursor-pointer">ru</button>
            <button onClick={() => handleLangChange("en")} className="w-[30px] bg-white text-black rounded-[8px] border-0 cursor-pointer">en</button>
        </div>
    )
}

export default SwitchLang;