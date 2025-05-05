"use client";
import { useState } from "react";
import prisma from "@/lib/prisma";
import { useTranslations } from "next-intl";
import createUser from "../actions/user";
import Form from "next/form";

const Page = () => {
    const [email, setEmail] = useState("");
    const t = useTranslations("admin");

    const handleEmailChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleFormSubmit = () => {
        document.cookie = `email=${email}; path=/;`; // Добавить срок действия куки по необходимости
    };

    return (
        <div className="flex flex-col gap-[20px] items-center justify-center mt-[20px]">
            <h2 className="font-bold text-[30px]">{t("adminSignin")}</h2>
            <Form action={createUser} onSubmit={handleFormSubmit}>
                <div className="flex flex-col gap-[20px] items-center justify-center mt-[20px]">
                    <input
                        type="text"
                        name="name"
                        placeholder="name"
                        required
                        className="w-[240px] h-[40px] pl-[10px] rounded-[10px] border-[1px]"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="login"
                        required
                        value={email}
                        onChange={handleEmailChange}
                        className="w-[240px] h-[40px] pl-[10px] rounded-[10px] border-[1px]"
                    />
                    <button className="w-[240px] h-[40px] rounded-[10px] text-black bg-white cursor-pointer">
                        {t("button")}
                    </button>
                </div>
            </Form>
        </div>
    );
};

export default Page;
