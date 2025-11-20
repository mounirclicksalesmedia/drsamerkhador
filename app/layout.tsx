import type { Metadata } from "next";
import "./globals.css";

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
      <body>
        {children}
      </body>
    </html>
  );
}
