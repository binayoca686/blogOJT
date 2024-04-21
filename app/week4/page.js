
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
                <h1 class="article-title">Week 4, Dont Slack on Slack Clone!.</h1>
              </div>
            </blockquote>
            <div class="post-thumb">
              <img src="img/week4/Screenshot (251).png" class="img-fluid" alt=""/>
            </div>
            <div class="article-content">
              <p>
                Since sir Maf told us that <strong>about the casino project,</strong> and needed man power to do that along with others, I code the slack clone as fast I could, is used React framework for this, using REDUX for state management as well as storage for some data that I can fetch later on, used Firebase Firestore as a Database where it is NoSQL format. Luckily firebase also provide authentication the <strong>GoogleAuthProvider</strong>, then I just used thier google auth for SSO that after a succesfull login of user, gives as reponse token along with Google account credentials that can be used in auth state and even message reference later on, then <strong>TADA</strong> I got my self an easy made auth, that popup asking for Google account to use for log in.
              </p>

            <div class="post-thumb">
              <img src="img/week4/ss3.png" class="img-fluid" alt=""/>
            </div>
            <p>
                Then by the date of <strong>October 26, 2023</strong> I had finished doing the slack clone, then the next moring <strong>October 27, 2023</strong>, I started doing the <strong>Trello Clone</strong>, I started with the header, where logo and user logo is located, and the canvas where the column would be.
            </p>
            <div class="post-thumb">
              <img src="img/week4/Screenshot (267).png" class="img-fluid" alt=""/>
              
            </div>
              <p>
                This is where I used Appwrite service provider for database, react DND for the draggable coloumns, and OPEN AI api for AI response base from the data being feed to the promt via <strong>gpt-3.5-turbo</strong>.
              </p>
            </div>
          {/* next prev ======================*/}
            <nav aria-label="...">
              <ul class="pagination">
                <li class="page-item ">
                  <a class="page-link" href="/week3">Previous</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="/week5">Next</a>
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