import { Inter } from "next/font/google";
import "./globals.css";
import "../public/lib/bootstrap/css/bootstrap.min.css";
import "../public/lib/font-awesome/css/font-awesome.min.css";
import "../public/lib/animate/animate.min.css";
import "../public/lib/ionicons/css/ionicons.min.css";
import "../public/lib/owlcarousel/assets/owl.carousel.min.css";
import "../public/lib/lightbox/css/lightbox.min.css";
import "../public/css/style.css";
import Script from "next/script";
import Head from 'next/head';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bryan Bayoca Weekly Blogs",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
 
      <body id="page-top" className={inter.className}>{children}
      
        <Script src="lib/jquery/jquery.min.js"/>
        <Script src="lib/jquery/jquery-migrate.min.js"/>
        <Script src="lib/popper/popper.min.js"/>
        <Script src="lib/bootstrap/js/bootstrap.min.js"/>
        <Script src="lib/easing/easing.min.js"/>
        <Script src="lib/counterup/jquery.waypoints.min.js"/>
        <Script src="lib/counterup/jquery.counterup.js"/>
        <Script src="lib/owlcarousel/owl.carousel.min.js"/>
        <Script src="lib/lightbox/js/lightbox.min.js"/>
        <Script src="contactform/contactform.js"/>
        <Script src="js/main.js"/>
      
      </body>
    </html>
  );
}
