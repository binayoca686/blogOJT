
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
                  This pertains for dates October 02, 2023 to October 08, 2023 and yes, including Saturday and Sunday.
                </p>
              </div>
              
            </div>
          </a>
        </div>
        
      </div>
  )
}

export default WeeklyBlogs