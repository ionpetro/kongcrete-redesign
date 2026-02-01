import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hello World | Kong Crete LLC | Diamond Finish Polished Concrete",
  description: "Professional concrete polishing, resurfacing, and restoration services in Minnesota. Diamond finish, hardened performance.",
  keywords: "polished concrete, concrete polishing, concrete restoration, Minnesota, Twin Cities, Eden Prairie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${inter.variable} antialiased bg-[#121212] text-white`}
        style={{ fontFamily: "var(--font-poppins), 'Poppins', system-ui, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
