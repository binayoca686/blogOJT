
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
                <h1 class="article-title">Week 8, API's Head Ache 2.</h1>
              </div>
            </blockquote>
            <div class="post-thumb">
              <img src="img/week8/ss2.png" class="img-fluid" alt=""/>
            </div>
            <div class="article-content">
              <p>
                Guess what, thanks to POSTMAN and further trial and error, I got hang of it, how the request and response work in API interactions.
              </p>


            <div class="post-thumb">
            <img src="img/week8/ss3.png" class="img-fluid" alt=""/>
            </div>
            <p>
                Now I can now map for each json format I get from API response, this will be smooth sailing from now on. I hope so.
            </p>

            <p>
                Overall as of Nov. 24, I had done the API functions that get the Game List available and Gamelaunch function for it.
            </p>
            </div>
          {/* next prev ======================*/}
            <nav aria-label="...">
              <ul class="pagination">
                <li class="page-item ">
                  <a class="page-link" href="/week7">Previous</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="/week9">Next</a>
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