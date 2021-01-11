  // $(document).ready(function () {
    $("button").on("click", function (){ 
                
        var restaurant = $(this).attr("data-person");

        var inputValue = document.querySelector('.inputValue')


        function userAction() {

            let box = [];
            // async function getRestaurants() {
            let url1 = "https://developers.zomato.com/api/v2.1/search?count=20&lat=34.052235&lon=-118.243683&category=3";
            let url2 = "https://developers.zomato.com/api/v2.1/search?entity_id=295&entity_type=city";
            let url3 = "https://developers.zomato.com/api/v2.1/search?count=50&lat=40.2861946111111&lon=-97.6772406111111&radius=50M&sort=real_distance&order=asc";
            let urlEx = "https://developers.zomato.com/api/v2.1/cities?q=ottawa"
            var urlCity = "https://developers.zomato.com/api/v2.1/cities?q=" + inputValue.value + ""
            let h = new Headers();



            h.append('Accept', 'application/json')
            h.append('user-key', '578d0d78d47f16ab2fd8efe3a7794df5')
            let req = new Request(urlCity, {
                method: 'GET',
                headers: h,
                mode: 'cors'
            });
            fetch(req).then(function (response) {
                return response.json();
            }).then(function (jsonData) {
                var cityData = (jsonData);
                console.log(cityData);
                console.log(cityData.location_suggestions[0].id);

                
                let urlCollect = "https://developers.zomato.com/api/v2.1/collections?city_id=" + cityData.location_suggestions[0].id + ""
                console.log(urlCollect)

                let req1 = new Request(urlCollect, {
                    method: 'GET',
                    headers: h,
                    mode: 'cors'
                });
                fetch(req1).then(function (response) {
                    return response.json();
                }).then(function (jsonData1) {
                    var resData = (jsonData1);
                    console.log(resData)
                    

                    $.each(resData.collections, function (index, value) {
                        console.log(value)
                        console.log(value)
                  var name = value.collection.title;
                  console.log(name);
                  var desc = value.collection.description;
                  console.log(desc);
                  var share = value.collection.share_url;
                  console.log(share)
                  var link = value.collection.url
                  console.log(link)
                  // var cuisine = value.restaurant.cuisines;
                  // console.log(cuisines);
                  var image = value.collection.image_url;
                  console.log(image);


                        $('.collect').append(`
<br>

<div class="column post is-4 flipper rig">
                  <div class="tile">
                      <article class="column is-multiline">
                          <div class="column is-12 post-img">
                              <img src="${image}" alt="Featured Image">
                          </div>
                          <div class="column is-12 featured-content ">
                              <h3 class="heading post-category">${desc}</h3>
                              <h1 class="title post-title">${name}</h1>
                              
                              <p class="post-excerpt">${share}</p>
                              <br>
                              <a href="${link}" class="button is-primary">Take a peek</a>
                          </div>
                      </article>
                  </div> 
              </div>
            



`)
                    })



                })

            });
        }

        userAction();
    })
