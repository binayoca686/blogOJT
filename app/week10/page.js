
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
                <h1 class="article-title">Week 10 -  Hello Platipus!</h1>
              </div>
            </blockquote>
            <div class="post-thumb">
              <img src="img/week10/ss3.png" class="img-fluid" alt=""/>
            </div>
            <div class="article-content">
              <p>
                For this time frame, I started the front end for the web app settings page or rather member center, where users can change or set thier account settings. Also fixed the instance that when launching a game it opens a new tab, I do that by create a page where it is dynamically get the sources of game and display it in iframe so players could still play inside the web app.
              </p>
              <div class="post-thumb">
              <img src="img/week10/ss4.png" class="img-fluid" alt=""/>
            </div>
            <p>
                Also hello to the new API that I recently added, It is the <strong>Platipus Gaming API</strong>. After many trial and errors, the API give an response after I created the correct payload for it.
            </p>

            <p>
                Overall as of Dec. 08, I had done the the member center pages and added a new API which is Platipus Gaming.
            </p>
            </div>
          {/* next prev ======================*/}
            <nav aria-label="...">
              <ul class="pagination">
                <li class="page-item ">
                  <a class="page-link" href="/week9">Previous</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="/week11">Next</a>
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