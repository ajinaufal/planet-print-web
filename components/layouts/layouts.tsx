'use client';

import React, { ReactNode } from 'react';
import Head from 'next/head';
import SideBar from '../sidebar/sidebar';
import Header from '../header/header';
import { usePathname } from 'next/navigation';

export function Layouts({
    children,
    title = 'Planet Print',
    description = 'Planet print is an e-commerce for printing needs',
    author = 'Planet Print',
    imageContent = '/images/logo.webp',
}: {
    children: ReactNode;
    title?: string;
    description?: string;
    author?: string;
    imageContent?: string;
}) {
    const pathname = usePathname();

    const url = typeof window !== 'undefined' ? window.location.origin : '';
    return (
        <html lang="en">
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>

                {/* SEO Meta Tags */}
                <meta name="description" content={description} />
                <meta name="keywords" content="planet print, planetprint, Planet Print" />
                <meta name="author" content={author} />

                {/* Open Graph Meta Tags (for social media sharing) */}
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={imageContent} />
                <meta property="og:url" content={url} />
                <meta property="og:type" content="website" />

                {/* Twitter Meta Tags (for Twitter cards) */}
                <meta name="twitter:card" content="summary_large_image" />
                {/* <meta name="twitter:site" content="@yourTwitterHandle" /> */}
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={imageContent} />

                {/* Favicon */}
                <link rel="icon" href="/images/favicon.ico" />

                {/* Apple Touch Icon */}
                <link rel="apple-touch-icon" href={imageContent} />

                {/* CSS Stylesheets */}
                <link rel="stylesheet" href="/css/global.css" />

                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
                    integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
            </Head>
            <body>
                <div className="sm:flex bg-[#EC5800]/[.2]">
                    <SideBar pathname={pathname} />
                    <div className="sm:w-5/6 md:3/4 bg-slate-50 sm:my-4 sm:mr-4 sm:rounded-xl sm:p-4">
                        <Header pathname={pathname} />
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
