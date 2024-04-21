
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
                <h1 class="article-title">Week 12 - NextAuth</h1>
              </div>
            </blockquote>
            <div class="post-thumb">
              <img src="img/week12/ss2.png" class="img-fluid" alt=""/>
            </div>
            <div class="article-content">
              <p>
                For this time frame, after trial and error and getting video references from youtube, I created callbacks that also returns salted token, that when decrypt, it results onto users credential, I used it to determine the auth state of the web app.
              </p>
              <div class="post-thumb">
              <img src="img/week12/ss3.png" class="img-fluid" alt=""/>
            </div>
            <p>
                Also when pushing new account via credentials, I prevent any duplicated Usernames to exist.
            </p>

            <p>
                Overall as of Dec. 22, I had pretty completed the security in NextAuth.
            </p>
            </div>
          {/* next prev ======================*/}
            <nav aria-label="...">
              <ul class="pagination">
                <li class="page-item ">
                  <a class="page-link" href="/week11">Previous</a>
                </li>
                <li class="page-item disabled">
                  <a class="page-link">Next</a>
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