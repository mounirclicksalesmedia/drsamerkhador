import type { Metadata } from "next";
import { Noto_Kufi_Arabic } from "next/font/google";
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
      </body>
    </html>
  );
}
