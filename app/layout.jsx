import { Inter, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";
import Navbar from '@/components/Navbar';
import Topbar from "@/components/Topbar";
import Leftbar from "@/components/Leftbar";
import Bottombar from "@/components/Bottombar";

const inter = Inter({ subsets: ["latin"] });
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

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
      <body className={` flex flex-col h-screen`}>
        <Topbar />
        <div className="flex flex-grow">
          <Leftbar />
          <div className="flex flex-col flex-grow">
            <Navbar />
            <main className="flex-grow overflow-auto">
              {children}
            </main>
          </div>
        </div>
        <Bottombar />
      </body>
    </html>
  );
}
