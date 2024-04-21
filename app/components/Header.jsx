'use client';
import { usePathname } from 'next/navigation';
import Head from "next/head";
import React, { useEffect, useState } from 'react';

function Header() {
  const pathname = usePathname();
  const shouldDisplayBreadcrumb = pathname.includes("week");
  const weekNumber = pathname.substring(pathname.lastIndexOf('/') + 1);

  // const [initialLoad, setInitialLoad] = useState(true);
  // useEffect(() => {
  //   if (initialLoad) {
  //     console.log('Component initialized!');
  //     setInitialLoad(false); 
  //   }
  // }, [initialLoad]);

  
  useEffect(() => {
    // JavaScript logic here
    const nav = document.querySelector('nav');
    const navHeight = nav ? nav.offsetHeight : 0;

    const handleScroll = () => {
      // Your scroll-related logic here
      const pixels = 50;
      const top = 1200;

      if (window.scrollY > pixels) {
        // Adjust navbar classes based on scroll position
        document.querySelector('.navbar-expand-md').classList.add('navbar-reduce');
        document.querySelector('.navbar-expand-md').classList.remove('navbar-trans');
      } else {
        document.querySelector('.navbar-expand-md').classList.add('navbar-trans');
        document.querySelector('.navbar-expand-md').classList.remove('navbar-reduce');
      }

      if (window.scrollY > top) {
        // Show/hide scroll-to-top button based on scroll position
        document.querySelector('.scrolltop-mf').style.display = 'block';
      } else {
        document.querySelector('.scrolltop-mf').style.display = 'none';
      }
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
    <Head>
    <link rel="shortcut icon" href="../public/img/BryanLogoB.png" />
    </Head>
    
    <nav class="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">

      {shouldDisplayBreadcrumb ? (
        <>
          <div class="container">
            <a className="navbar-brand js-scroll mx-auto" href="/">
              <img src="img/BryanLogoW.png" style={{height: "150px"}}/> 
            </a>
          </div>
          <ol className="breadcrumb d-flex justify-content-center">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#" className='capitalize'>{weekNumber}</a>
            </li>

          </ol>
        </>
      ):(
        <>
          <div class="container">
            <a className="navbar-brand js-scroll mx-auto" href="#page-top">
              <img src="img/BryanLogoW.png" style={{height: "150px"}}/> 
            </a>
          </div>
        </> 
      )}
      {/* <div class="container">
        <a className="navbar-brand js-scroll mx-auto" href="#page-top">
          <img src="img/BryanLogoW.png" style={{height: "150px"}}/> 
        </a>
      </div> */}
    </nav>
    
    </>
  )
}

export default Header