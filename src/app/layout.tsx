import { Figtree } from "next/font/google";
import { FunctionComponent, ReactNode } from "react";
import clsx from "clsx";
import NavigationBar from "@/components/shared/NavigationBar";
import SmoothScrollHandler from "@/components/shared/SmoothScrollHandler";
import SafeArea from "@/components/shared/SafeArea";
import "./global.css";
import Providers from "@/components/shared/Providers";

const figtreeFont = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Leyton Blackler",
  description: "Generated by create next app",
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FunctionComponent<RootLayoutProps> = ({ children }) => (
  <html lang="en" className="h-full">
    <body className={clsx("h-full", figtreeFont.className)}>
      <Providers>
        <NavigationBar />
        <SmoothScrollHandler />
        <main
          className={clsx(
            "bg-gray-50 dark:bg-gray-950",
            "text-gray-950 dark:text-gray-50",
            "flex flex-col",
            "min-h-full"
          )}
        >
          <SafeArea>{children}</SafeArea>
        </main>
      </Providers>
    </body>
  </html>
);

export default RootLayout;
