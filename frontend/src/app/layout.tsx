import UserInitializer from "@/components/User-initializer/UserInitializer";
import UserProvider from "@/providers/UserProvider";
import type { Metadata } from "next";
import { Inter, Rubik, Syne } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} ${inter.variable} ${syne.variable} antialiased`}
      >
        <UserProvider>
          <UserInitializer />
          {children}
          <Toaster richColors />
        </UserProvider>
      </body>
    </html>
  );
}
