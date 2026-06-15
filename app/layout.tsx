import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { cdnAsset } from "@/lib/cdn";

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
    images: [cdnAsset("images/pizza_mios_logo.jpg")],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T5HQN6X4');`,
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`} suppressHydrationWarning={true}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T5HQN6X4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Navbar />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
