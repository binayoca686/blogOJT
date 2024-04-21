import React from 'react';
import Header from "./components/Header";
import WeeklyBlogs from "./components/WeeklyBlogs";
import Haysay from './components/Haysay';

export default function Home() {
  return (
<>
  
<Header/>
  <div id="home" class="intro route bg-image" style={{backgroundImage: "url(img/intro-bg2.jpg)"}}>
    <div class="overlay-itro"></div>
    <div class="intro-content display-table">
      <div class="table-cell">
        <Haysay/>
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
              Blogs
            </h3>
            <p class="subtitle-a">
              Click Weekly Blogs Selections to See more.
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
  <a href="#" class="back-to-top">
    <i class="fa fa-chevron-up"></i>
  </a>
  {/* <div id="preloader"></div>  */}
</>
  );
}
