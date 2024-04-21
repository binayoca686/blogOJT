
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
                <h1 class="article-title">Week 7, API's Head Ache.</h1>
              </div>
            </blockquote>
            <div class="post-thumb">
              <img src="img/week7/ss2.png" class="img-fluid" alt=""/>
            </div>
            <div class="article-content">
              <p>
                And that is the problem there are many to read and I dont want to<strong> read</strong> , thats a joke, any way there is some new to this <strong>Smart Soft Gaming</strong>. The API request involves with custom header so I push my brain to learn node.js in deeply manner. 
              </p>


            <div class="post-thumb">
            <img src="img/week7/ss3.png" class="img-fluid" alt=""/>
            </div>
            <p>
                Since Next.js has a file routing and filename convention, I utilized it, using node as a backend, create an api which takes request body from front-end based from what game card the user clicked. The at the api backend, get those request body, and request to the Smartsoft API, to get the JSON response I want to get like game link with One time token along, so I can supply it to my API when launching the game.
            </p>

            <div class="post-thumb">
            <img src="img/week7/ss4.jpg" class="img-fluid" alt=""/>
            </div>
            <p>
                Also on Nov 13, at 10:00 AM, we had meeting along with Raymark, Abegail and Jhoebert with how things going on with our OJT with them, I presented my three tasks Clones and my current progress in Casino.
            </p>
            <p>
                Overall as of Nov. 17, I had done the API that will catch the request body from frontend, and gamelaunch is still on WIP.
            </p>
            </div>
          {/* next prev ======================*/}
            <nav aria-label="...">
              <ul class="pagination">
                <li class="page-item ">
                  <a class="page-link" href="/week6">Previous</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="/week8">Next</a>
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