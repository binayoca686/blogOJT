import Head from "next/head";
import Script from "next/script";
import Header from "./components/Header";
import WeeklyBlogs from "./components/WeeklyBlogs";


export default function Home() {

  return (
<>
  <Header/>

  <div id="home" class="intro route bg-image" style={{backgroundImage: "url(img/intro-bg2.jpg)"}}>
    <div class="overlay-itro"></div>
    <div class="intro-content display-table">
      <div class="table-cell">
        <div class="container">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
          <p class="display-6 color-d">cout &lt;&lt; "Hello, world!" &lt;&lt; endl;</p>
          {/* <h1 class="intro-title mb-4">I am Bryan Bayoca</h1> */}
          <p style={{fontSize: '30px'}} class="intro-title mb-4">console.log("I am Bryan Bayoca");</p>
          <p style={{fontSize: '20px'}} class="intro-subtitle"><span>echo </span><span class="text-slider-items">"TLC Student", "Strastan Intern", "Web Developer", "Web Designer","Frontend Developer"</span><strong class="text-slider"></strong></p>
          <p class="pt-3"><a class="btn btn-primary btn js-scroll px-4" href="#blog" role="button">See Weekly Blogs</a></p> 
        </div>
      </div>
    </div>
  </div>
  <h></h>
  
  <section id="blog" class="blog-mf sect-pt4 route">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="title-box text-center">
            <h3 class="title-a">
              Blog
            </h3>
            <p class="subtitle-a">
              Weekly Blogs Selections.
            </p>
            <div class="line-mf"></div>
          </div>
        </div>
      </div>
      <WeeklyBlogs/>
    </div>
  </section>
  <section
      className="paralax-mf footer-paralax bg-image sect-mt4 route"
      style={{
        backgroundImage: "url('/img/overlay-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        paddingTop: '60px', // Adjust padding top as needed
        paddingBottom: '60px', // Adjust padding bottom as needed
        textAlign: 'center',
        color: 'white'
      }}
    >
    <div class="overlay-mf"></div>
    
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="copyright-box">
              <p class="copyright">School Year <strong>2023 - 2024</strong>. TLC-CCS OJT 2023</p>
              <div class="credits">
                <p>- Bryan Bayoca</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </section>


  <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
  {/* <div id="preloader"></div>  */}

 




</>
  );
}
