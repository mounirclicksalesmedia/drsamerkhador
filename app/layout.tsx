import type { Metadata } from "next";
import { Noto_Kufi_Arabic } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const notoKufiArabic = Noto_Kufi_Arabic({
  variable: "--font-noto-kufi",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "د. سامر خضور - طب الأسنان التجميلي والترميمي",
  description: "عيادة د. سامر خضور المتخصصة في طب الأسنان التجميلي والترميمي - 25 عام من الخبرة والتميز",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${notoKufiArabic.variable} antialiased font-sans`}
      >
        {children}
        {/* Google Tag - Disabled on mobile for testing */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17721537681"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            // Only load on desktop for testing
            if (typeof window !== 'undefined' && window.innerWidth >= 768) {
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17721537681');
            }
          `}
        </Script>
      </body>
    </html>
  );
}
