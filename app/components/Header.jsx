import Head from "next/head";
import Script from "next/script";

function Header() {
  return (
    <>
            <Head>
    <link rel="shortcut icon" href="../public/img/BryanLogoB.png" />
    </Head>
    <Script src="lib/jquery/jquery.min.js"/>
    <Script src="lib/jquery/jquery-migrate.min.js"/>
    <Script src="lib/popper/popper.min.js"/>
    <Script src="lib/bootstrap/js/bootstrap.min.js"/>
    <Script src="lib/easing/easing.min.js"/>
    <Script src="lib/counterup/jquery.waypoints.min.js"/>
    <Script src="lib/counterup/jquery.counterup.js"/>
    <Script src="lib/owlcarousel/owl.carousel.min.js"/>
    <Script src="lib/lightbox/js/lightbox.min.js"/>
    <Script src="lib/typed/typed.min.js"/>
    <Script src="contactform/contactform.js"/>
    <Script src="js/main.js"/>
    
    <nav class="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
      <div class="container">
        <a className="navbar-brand js-scroll mx-auto" href="#page-top">
          <img src="img/BryanLogoW.png" style={{height: "150px"}}/> 
        </a>
      </div>
    </nav>
    </>
  )
}

export default Header