import "@/styles/globals.css";
import Navbar from '@/components/Navbar';
import Topbar from "@/components/Topbar";
import Leftbar from "@/components/Leftbar";
import Bottombar from "@/components/Bottombar";
import Sidebar from "@/components/Sidebar";

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
          <Sidebar />
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
