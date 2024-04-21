
function WeeklyBlogs() {
  return (
    <div class="row">
        <div class="col-md-4">
          <a href="/week1">
            <div class="card card-blog">
              <div class="card-img">
                <a href="/week1"><img src="img/post-1.jpg" alt="" class="img-fluid"/></a>
              </div>
              <div class="card-body">
                <div class="card-category-box">
                  <div class="card-category">
                    <h6 class="category">Week 1</h6>
                  </div>
                </div>
                <h3 class="card-title"><a href="/week1">See more about Week 1</a></h3>
                <p class="card-description">
                  Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis
                  a pellentesque nec,
                  egestas non nisi.
                </p>
              </div>
              
            </div>
          </a>
        </div>
        
      </div>
  )
}

export default WeeklyBlogs