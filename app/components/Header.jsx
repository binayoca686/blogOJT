'use client';
import { usePathname } from 'next/navigation';
import Head from "next/head";

function Header() {
  const pathname = usePathname();
  const shouldDisplayBreadcrumb = pathname.includes("week");
  const weekNumber = pathname.substring(pathname.lastIndexOf('/') + 1);
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