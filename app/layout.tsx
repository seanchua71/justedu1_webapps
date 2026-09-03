import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

// Warm, rounded geometric sans for headings: friendlier and more legible for a
// family-facing tuition brand than the previous unstyled Georgia default.
const heading = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JustEdu | Teaching From Our Hearts",
  description:
    "JustEdu is a Singapore tuition centre offering Primary and Secondary English, Mathematics and Science. Book a free trial class today.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-SG" className={heading.variable}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
