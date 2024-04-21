
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
            <div class="post-thumb">
              <img src="img/post-1.jpg" class="img-fluid" alt=""/>
            </div>
            <div class="post-meta">
              <h1 class="article-title">Lorem ipsum dolor sit amet consec tetur adipisicing</h1>
              
            </div>
            <div class="article-content">
              <p>
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum
                porta. Quisque velit
                nisi, pretium ut lacinia in, elementum id enim. Praesent sapien massa, convallis a pellentesque
                nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                Nulla quis lorem ut libero malesuada feugiat.
              </p>
              <p>
                Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Mauris blandit
                aliquet elit, eget tincidunt
                nibh pulvinar a. Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Donec sollicitudin molestie malesuada.
              </p>
              <p>
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Praesent
                sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                sem. Donec rutrum congue leo eget malesuada.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat.
                Curabitur arcu erat,
                accumsan id imperdiet et, porttitor at sem. Vivamus suscipit tortor eget felis porttitor
                volutpat. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium
                ut lacinia in, elementum id enim.
              </p>
              <blockquote class="blockquote">
                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              </blockquote>
              <p>
                Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Mauris blandit
                aliquet elit, eget tincidunt
                nibh pulvinar a. Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Donec sollicitudin molestie malesuada.
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