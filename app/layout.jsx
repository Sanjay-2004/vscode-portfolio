import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Sanjay Agamamidi | Portfolio",
    template: "Sanjay Agamamidi | %s",
  },
  description: "Sanjay Agamamidi's portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Navbar />
        {children}</body>
    </html>
  );
}
