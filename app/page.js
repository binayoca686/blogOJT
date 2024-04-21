import Head from "next/head";
import Script from "next/script";
import Header from "./components/Header";


export default function Home() {

  return (
<>
  <Header/>

  <div id="home" class="intro route bg-image" style={{backgroundImage: "url(img/intro-bg2.jpg)"}}>
    <div class="overlay-itro"></div>
    <div class="intro-content display-table">
      <div class="table-cell">
        <div class="container">
          <p class="display-6 color-d">Hello, world!</p>
          <h1 class="intro-title mb-4">I am Bryan Bayoca</h1>
          <p class="intro-subtitle"><span class="text-slider-items">TLC Student, Strastan Intern, Web Developer, Web Designer,Frontend Developer</span><strong class="text-slider"></strong></p>
          <p class="pt-3"><a class="btn btn-primary btn js-scroll px-4" href="#blog" role="button">See Weekly Blogs</a></p> 
        </div>
      </div>
    </div>
  </div>
  <h></h>
  
  <section id="blog" class="blog-mf sect-pt4 route">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="title-box text-center">
            <h3 class="title-a">
              Blog
            </h3>
            <p class="subtitle-a">
              Weekly Blogs Selections.
            </p>
            <div class="line-mf"></div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="card card-blog">
            <div class="card-img">
              <a href="blog-single.html"><img src="img/post-1.jpg" alt="" class="img-fluid"/></a>
            </div>
            <div class="card-body">
              <div class="card-category-box">
                <div class="card-category">
                  <h6 class="category">Travel</h6>
                </div>
              </div>
              <h3 class="card-title"><a href="blog-single.html">See more ideas about Travel</a></h3>
              <p class="card-description">
                Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis
                a pellentesque nec,
                egestas non nisi.
              </p>
            </div>
            <div class="card-footer">
              <div class="post-author">
                <a href="#">
                  <img src="img/testimonial-2.jpg" alt="" class="avatar rounded-circle"/>
                  <span class="author">Morgan Freeman</span>
                </a>
              </div>
              <div class="post-date">
                <span class="ion-ios-clock-outline"></span> 10 min
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card card-blog">
            <div class="card-img">
              <a href="blog-single.html"><img src="img/post-2.jpg" alt="" class="img-fluid"/></a>
            </div>
            <div class="card-body">
              <div class="card-category-box">
                <div class="card-category">
                  <h6 class="category">Web Design</h6>
                </div>
              </div>
              <h3 class="card-title"><a href="blog-single.html">See more ideas about Travel</a></h3>
              <p class="card-description">
                Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis
                a pellentesque nec,
                egestas non nisi.
              </p>
            </div>
            <div class="card-footer">
              <div class="post-author">
                <a href="#">
                  <img src="img/testimonial-2.jpg" alt="" class="avatar rounded-circle"/>
                  <span class="author">Morgan Freeman</span>
                </a>
              </div>
              <div class="post-date">
                <span class="ion-ios-clock-outline"></span> 10 min
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card card-blog">
            <div class="card-img">
              <a href="blog-single.html"><img src="img/post-3.jpg" alt="" class="img-fluid"/></a>
            </div>
            <div class="card-body">
              <div class="card-category-box">
                <div class="card-category">
                  <h6 class="category">Web Design</h6>
                </div>
              </div>
              <h3 class="card-title"><a href="blog-single.html">See more ideas about Travel</a></h3>
              <p class="card-description">
                Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis
                a pellentesque nec,
                egestas non nisi.
              </p>
            </div>
            <div class="card-footer">
              <div class="post-author">
                <a href="#">
                  <img src="img/testimonial-2.jpg" alt="" class="avatar rounded-circle"/>
                  <span class="author">Morgan Freeman</span>
                </a>
              </div>
              <div class="post-date">
                <span class="ion-ios-clock-outline"></span> 10 min
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
      className="paralax-mf footer-paralax bg-image sect-mt4 route"
      style={{
        backgroundImage: "url('/img/overlay-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        paddingTop: '60px', // Adjust padding top as needed
        paddingBottom: '60px', // Adjust padding bottom as needed
        textAlign: 'center',
        color: 'white'
      }}
    >
    <div class="overlay-mf"></div>
    
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="copyright-box">
              <p class="copyright">School Year <strong>2023 - 2024</strong>. TLC-CCS OJT 2023</p>
              <div class="credits">
                <p>- Bryan Bayoca</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </section>


  <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
  {/* <div id="preloader"></div>  */}

 




</>
  );
}
