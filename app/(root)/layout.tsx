import React, { ReactNode } from "react";
interface Ilayout {
  children: ReactNode;
}

import { Metadata } from "next";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: {
    template: `%s | Ecommerce %s`,
    default: "Ecommerce",
  },
};

export default function layout({ children }: Ilayout) {
  return (
    <>
      <Header />
      <main className="flex h-screen  wrapper">
        {children}
       
      </main>
      <Footer />
    </>
  );
}
