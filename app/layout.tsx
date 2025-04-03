
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/globals.css"
import { APP_NAME } from "@/lib/constatnts";
import { ThemeProvider } from "@/components/theme-provider";





const inter = Inter({
  subsets:['latin']
})


export const metadata: Metadata = {
  title: APP_NAME,
  description: "Ecommerce Platform",
};

export default async function  RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  
  
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={ `${inter.className} antialiased`}
      >
        <ThemeProvider
        attribute={"class"}
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
        
        >
          
          
        {children}
          
        </ThemeProvider>
        
      </body>
    </html>
  );
}
