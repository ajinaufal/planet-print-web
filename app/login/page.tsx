'use client';
import { LoginRequestEntities } from '@/domain/entities/request/login_request';
import { AuthUsecase } from '@/domain/usecase/auth_usecase';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const params = new LoginRequestEntities({
            email: email,
            password: password,
            remember: false,
        });

        const validations = params.validation();
        if (validations.length == 0) {
            setLoading(true);
            const useCaseLogin = await AuthUsecase.login(params);
            setLoading(false);
            if (useCaseLogin.isRight()) router.push('/products');
        }
    };

    return (
        <div className="relative w-full h-full">
            <div className="hidden lg:block absolute z-0 bg-orange-200 h-screen w-5/12 rounded-e-[8rem]"></div>
            <div className="z-10 container mx-auto h-full flex">
                <div className="hidden xl:flex flex-col min-h-screen w-full">
                    <a href="" className="z-20 flex items-center pt-5">
                        <Image
                            className="z-20"
                            src="/images/logo.webp"
                            alt={'asdas'}
                            width={100}
                            height={24}
                        ></Image>
                    </a>
                    <div className="z-20 my-auto">
                        <div className="text-white font-medium text-4xl leading-tight">
                            A few more clicks to
                            <br />
                            sign in to your account.
                        </div>
                        <div className="mt-5 text-lg text-white">
                            Manage your e-commerce accounts in one place
                        </div>
                    </div>
                </div>
                <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0 w-full">
                    <div className="md:my-auto mx-auto xl:ml-20 bg-white dark:bg-darkmode-600 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
                        <h2 className="font-bold text-2xl xl:text-3xl text-center xl:text-left">
                            Sign In
                        </h2>
                        <div className="mt-2 text-slate-400 xl:hidden text-center">
                            A few more clicks to sign in to your account. Manage your e-commerce
                            accounts in one place
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="mt-8 max-lg:flex max-lg:flex-col">
                                <input
                                    type="text"
                                    placeholder="email"
                                    className="py-3 px-3 min-w-[350px] max-lg:mx-auto max-w-[400px] w-full rounded-md border-slate-200 text-sm leading-5 shadow border"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                    type="password"
                                    placeholder="password"
                                    className="mt-4 py-3 px-3 min-w-[350px] max-lg:mx-auto max-w-[400px] w-full rounded-md border-slate-200 text-sm leading-5 shadow border"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="max-lg:mx-auto flex text-slate-600 dark:text-slate-500 text-xs sm:text-sm mt-4 max-w-[400px]">
                                <div className="flex items-center mr-auto">
                                    <input
                                        id="remember-me"
                                        type="checkbox"
                                        className="rounded shadow border border-slate-200 mr-2 form-checkbox"
                                        onChange={() => setRemember(!remember)}
                                    />
                                    <label className="cursor-pointer select-none">
                                        Remember me
                                    </label>
                                </div>
                                <a href="">Forgot Password?</a>
                            </div>
                            <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                                <button
                                    type="submit"
                                    className="max-lg:max-w-[400px] border border-opacity-100 border-orange-800 bg-orange-800 bg-opacity-100 text-white text-opacity-100 inline-flex items-center justify-center border rounded-md border-gray-300 cursor-pointer py-3 px-4 w-full xl:w-32 xl:mr-3 align-top"
                                >
                                    Login
                                </button>
                                {/* <button className="inline-flex items-center justify-center border border-gray-300 rounded-md cursor-pointer font-medium shadow-md border-opacity-100 text-slate-500 text-opacity-100 py-3 px-4 w-full xl:w-32 mt-3 xl:mt-0 align-top">
                                    Register
                                </button> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
