
import { Manrope} from "next/font/google"
import "./globals.css";
import Footer from '@/components/Footer';
import Menubar from "@/components/Menubar";
import { Toaster } from "react-hot-toast";


const crisman = Manrope({
  subsets:['latin'],
    weight:['400','700','600','800'],
  variable:'--font-crisman'
})



export const metadata = {
  title: "Youman",
  description: "Unlock your world with youman ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`light ${crisman.variable}  `}>
      <body className="dark:bg-black bg-[rgb(248 248 248)] font-crisman ">
        <Menubar/>
        <section className="min-h-[100vh] mt-20">
        {children}
        </section>
      
      
      <Footer/>
      <Toaster />
      </body>
      
    </html>
  );
}
