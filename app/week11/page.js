
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
                <h1 class="article-title">Week 11 - Dockerizing Attempt!</h1>
              </div>
            </blockquote>
            <div class="post-thumb">
              <img src="img/week11/ss2.png" class="img-fluid" alt=""/>
            </div>
            <div class="article-content">
              <p>
                For this time frame, I attempted to Dockerize the web app so I could set up a server for it with SSL that can request to a API with getting rejected for being unauthorized.
              </p>
              <div class="post-thumb">
              <img src="img/week11/ss3.png" class="img-fluid" alt=""/>
            </div>
            <p>
                But that was unnecessary, after gruelling for many days on how to emplement those all I just need is set up SSL in node, just like the figure above where I created a custom HTTP agent and request to the API that I want to requested. and then after that, I wan not getting rejected because I accompany the requests with client certificate along with my SSL.
            </p>

            <div class="post-thumb">
              <img src="img/week11/ss4.png" class="img-fluid" alt=""/>
            </div>
            <p>
                Also using <strong>NextAuth</strong>, I created an authentication where user can login with Username and passwprd or loging in through social accounts.
            </p>

            <p>
                Overall as of Dec. 15, I had started authentication and solved issue with Mascot Gaming.
            </p>
            </div>
          {/* next prev ======================*/}
            <nav aria-label="...">
              <ul class="pagination">
                <li class="page-item ">
                  <a class="page-link" href="/week10">Previous</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="/week12">Next</a>
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