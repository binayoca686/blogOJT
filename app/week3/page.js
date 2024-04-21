
import React from 'react'
import Header from '../components/Header'


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
                <h1 class="article-title">Week 3, Something Big Comming!.</h1>
              </div>
            </blockquote>
            <div class="post-thumb">
              <img src="img/week1/Screenshot (240).png" class="img-fluid" alt=""/>
            </div>

            <div class="article-content">
              <p>
                Through udemy, I further learned about <strong> usestate of react, redux, creating authentication by using JWT for each user's crud inside a seesion</strong> using this, I build a clone for Open Table, a restuarant web app where user can log in, set order with availablitity system using <strong>PostgreSQL </strong>database. I use SUPERBASE, an online platform that provides live/online databases including PostgreSQL.
              </p>

            <div class="post-thumb">
              <img src="img/week3/Screenshot (242).png" class="img-fluid" alt=""/>
            </div>
              <p>
                I was also expose in using online databases like <strong>MongoDB and Firebse</strong> which are NoSQL databases, it was a new experience for me, the structure was diffrent from MySQL, so I was taken a lot of time adapting that.
              </p>

            </div>
          {/* next prev ======================*/}
            <nav aria-label="...">
              <ul class="pagination">
                <li class="page-item ">
                  <a class="page-link" href="/week2">Previous</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="/week4">Next</a>
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