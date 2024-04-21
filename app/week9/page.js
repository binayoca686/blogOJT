
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
                <h1 class="article-title">Week 9 -  Iframes to JSON response.</h1>
              </div>
            </blockquote>
            <div class="post-thumb">
              <img src="img/week9/ss2.png" class="img-fluid" alt=""/>
            </div>
            <div class="article-content">
              <p>
                For this time frame, maybe its all about remork for both TVBET and SmartSoft lobbies, because both of them are Iframe integrated, Sir Maf wants to make it align to our design so I should supposed to fetch the gamelist, and map them with our own front end.
              </p>


            <p>
                Overall as of Dec. 01, I had done the clean up, created each lobby into pure fetch from API, and since TVBET has no API that gives gamelist I create a json file containing its game list and fetch it in our front end.
            </p>
            </div>
          {/* next prev ======================*/}
            <nav aria-label="...">
              <ul class="pagination">
                <li class="page-item ">
                  <a class="page-link" href="/week8">Previous</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="/week10">Next</a>
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