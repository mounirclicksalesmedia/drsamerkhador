import type { Metadata } from "next";
import { Noto_Kufi_Arabic } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const notoKufiArabic = Noto_Kufi_Arabic({
  variable: "--font-noto-kufi",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "د. سامر خضور - طب الأسنان التجميلي والترميمي",
  description: "عيادة د. سامر خضور المتخصصة في طب الأسنان التجميلي والترميمي - 25 عام من الخبرة والتميز",
  other: {
    'cache-control': 'no-store, no-cache, must-revalidate',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${notoKufiArabic.variable} antialiased font-sans`}>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17721537681"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17721537681');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
