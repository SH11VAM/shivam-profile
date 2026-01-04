import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";




const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Shivam.dev",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceMono.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
