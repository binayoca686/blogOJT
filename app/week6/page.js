
import React from 'react'
import Header from '../components/Header'
import Link from 'next/link'


function page() {

  return (
    <>
    <Header/>

  <div id="home" class="intro route bg-image" style={{backgroundImage: "url(img/intro-bg3.jpg)", height: "210px"}}>
    <div class="overlay-itro"></div>
    <div class="intro-content display-table">
      
    </div>
  </div>
  <section class="blog-wrapper sect-pt4" id="blog">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="post-box">
            <blockquote class="blockquote">
              <div class="post-meta">
                <h1 class="article-title">Week 6, 666 is for Luck!.</h1>
              </div>
            </blockquote>
            <div class="post-thumb">
              <img src="img/week6/Screenshot (275).png" class="img-fluid" alt=""/>
            </div>
            <div class="article-content">
              <p>
                As usual I start from header, then I build Owl Carousel for categories sliders below header, it is with use of <strong>Tailwind CSS</strong> and MUI components, just a small effort initial front end.
              </p>

            <div class="post-thumb">
              <img src="img/week6/Screenshot (274).png" class="img-fluid" alt=""/>
            </div>
            <p>
                Sir Maf, discussed before to avoid being overwhelm, I should start with one casino game provider, <strong>TVBET Gaming,</strong> so I read the documentation of the API of TVBET, Holy Moly, there is a lot to learn, from initializing, to api request, payloads that contain certification provided by TVBET to strastan, and the realtime exchange of token for each players actions back to api provider.
            </p>
            <div class="post-thumb">
              <img src="img/week6/Screenshot (284).png" class="img-fluid" alt=""/>
            </div>
            <div class="post-thumb">
              <img src="img/week6/Screenshot (286).png" class="img-fluid" alt=""/>
            </div>
            <p>
                Anyway I did it as of Nov 13, that was unnecessary panic, I integrated the TVBET games to us, along with gamelaunch, but in demo for the meantime.
            </p>
            </div>
          {/* next prev ======================*/}
            <nav aria-label="...">
              <ul class="pagination">
                <li class="page-item ">
                  <a class="page-link" href="/week5">Previous</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="/week7">Next</a>
                </li>
              </ul>
            </nav>
          {/* next prev ====================*/}

          </div>
        </div> 
      </div>
    </div>
  </section>
  <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
</>

  )
}

export default page