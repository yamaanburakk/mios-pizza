import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mios Pizza Restoran İşletmeciliği - İtalyan Lezzetlerinin En Güzel Hali",
  description: "Mios Pizza Restoran İşletmeciliği Ltd. Şti. - İtalyan pizza geleneğini İstanbul'un kalbine taşıyoruz. Taze malzemeler, usta eller ve taş fırınımızla lezzetin zirvesini keşfedin. Kozyatağı, Kadıköy.",
  keywords: ["pizza", "İtalyan pizza", "Kadıköy pizza", "Kozyatağı pizza", "pizza sipariş", "Mios Pizza", "Mios Pizza Restoran"],
  openGraph: {
    title: "Mios Pizza Restoran İşletmeciliği - İtalyan Lezzetlerinin En Güzel Hali",
    description: "Taze malzemeler ve taş fırın lezzetiyle İtalyan pizzalarının en güzel hali. info@miospizza.com.tr",
    type: "website",
    images: ['/images/pizza_mios_logo.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} antialiased`} suppressHydrationWarning={true}>
        <Navbar />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
