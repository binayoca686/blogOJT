
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
              <img src="img/week5/Screenshot (225).png" class="img-fluid" alt=""/>
            </div>
            <div class="article-content">
              <p>
                Yes, that was hard, gonna spoil here, I had taken almost 7 days to complete this, just from reading the documentation of react DND that Atlassan provided to doing function that triggers crud in each drag of the columns and tasks rows that is inside the coloums of To do, In Progress and Done and also allow image uploads is something absurd <strong>YAWA</strong>. 
              </p>

            <div class="post-thumb">
              <img src="img/week5/ss6.png" class="img-fluid" alt=""/>
            </div>
            <p>
                But I enjoy the fact that using <strong>OpenAI</strong> is a lot easier than I think, React DND is much harder than I think on contrary, Hell yeah, i got it in the end, satisfying enough my code works when dragging those coloumns and working as intended.
            </p>
            </div>
          {/* next prev ======================*/}
            <nav aria-label="...">
              <ul class="pagination">
                <li class="page-item ">
                  <a class="page-link" href="/week4">Previous</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="/week6">Next</a>
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