
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
                <h1 class="article-title">Week 3, Something Big Comming!.</h1>
              </div>
            </blockquote>
            <div class="post-thumb">
              <img src="img/week3/Screenshot (241).png" class="img-fluid" alt=""/>
            </div>
            <div class="article-content">
              <p>
                Since sir Maf told us that <strong>he will not based it in hours we spend in OJT, but instead the deliverables,</strong> we tend to do it even on weekends so that we can finish it faster, I am nearing to finish the OPEN Table clone that I am doing so I could start with the 3 task he assigned me after I finished the UDEMY course, and by the time of October 17, 2023 I have finished the Open Table Clone. I started with the first task on creating Google Shopping, I have created the front end and backend of the <Link style={{color: "blue"}}href="https://github.com/binayoca686/webScrapper.git">Google Shopping Clone</Link>(click to see repository).
              </p>
            <div class="post-thumb">
              <img src="img/week3/ss2.png" class="img-fluid" alt=""/>
            </div>
                <p>
                    The backend consist of calling the api, ang getting a json reponse from it, It is relatively hard because I use  <strong>TypeScript </strong> in building the web app, where I need to declare what type of a variable is, <strong>TypeScript </strong>is so picky that I always get error if I dont define what exepected type a variable is. I use Oxylabs to scrape to the products available from the provider.
                </p>
            <div class="post-thumb">
              <img src="img/week3/Screenshot (249).png" class="img-fluid" alt=""/>
            </div>
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