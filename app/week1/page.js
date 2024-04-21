
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
                <h1 class="article-title">Week 1, Task Giving.</h1>
              </div>
            </blockquote>
            <div class="post-thumb">
              <img src="img/week1/Screenshot (202).png" class="img-fluid" alt=""/>
            </div>

            <div class="article-content">
              <p>
                Through slack, I was tasked or rather given 3 exercises to do, such as cloning other popular platforms like, <strong>Google Shopping, Slack, and Trello,</strong> using popular Javascript frameworks like <strong>React, through MERN stack and NEXT.js</strong>
              </p>

            <div class="post-thumb">
              <img src="img/week1/Screenshot (203).png" class="img-fluid" alt=""/>
            </div>
              <p>
                And also I was given opportunity to further expand my knowledge in coding by them providing me an UDEMY access to further expand my understanding about NEXTjs. So for this week I was busy finishing the udemy course which talks about the basics of nextjs, about compenents, factoring and other useful utilities that <strong>NPM</strong> provides
              </p>

            </div>
          {/* next prev ======================*/}
            <nav aria-label="...">
              <ul class="pagination">
                <li class="page-item disabled">
                  <a class="page-link">Previous</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="week2">Next</a>
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