import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";

// const sourceSerifPro = localFont({
//     src: [
//         {
//             path: "./fonts/SourceSerifPro-ExtraLight.ttf",
//             weight: "200",
//             style: "normal",
//         },
//         {
//             path: "./fonts/SourceSerifPro-Light.ttf",
//             weight: "300",
//             style: "normal",
//         },
//         {
//             path: "./fonts/SourceSerifPro-Regular.ttf",
//             weight: "400",
//             style: "normal",
//         },
//         {
//             path: "./fonts/SourceSerifPro-Semibold.ttf",
//             weight: "600",
//             style: "normal",
//         },
//         {
//             path: "./fonts/SourceSerifPro-Bold.ttf",
//             weight: "700",
//             style: "normal",
//         },
//         {
//             path: "./fonts/SourceSerifPro-Black.ttf",
//             weight: "800",
//             style: "normal",
//         },
//     ],
//     variable: "--font-source-serif",
// });

export const metadata: Metadata = {
    title: "Virgiawan Sanria | Portofolio",
    description: "  ",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`antialiased`}>
                {children}
            </body>
        </html>
    );
}
