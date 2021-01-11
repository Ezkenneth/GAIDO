$("button").on("click", function () {
    var restaurant = $(this).attr("data-person");

    function userAction() {

        let box = [];
        // async function getRestaurants() {
        let url1 = "https://developers.zomato.com/api/v2.1/search?lat=34.052235&lon=-118.243683&category=3";
        let url2 = "https://developers.zomato.com/api/v2.1/search?entity_id=295&entity_type=city";
        let url3 = "https://developers.zomato.com/api/v2.1/search?count=50&lat=40.2861946111111&lon=-97.6772406111111&radius=50M&sort=real_distance&order=asc";
        let h = new Headers();

        h.append('Accept', 'application/json')
        h.append('user-key', '578d0d78d47f16ab2fd8efe3a7794df5')
        let req = new Request(url2, {
            method: 'GET',
            headers: h,
            mode: 'cors'
        });
        fetch(req).then(function (response) {
            return response.json();
        }).then(function (jsonData) {
            var resData = (jsonData);
            // console.log(resData[0]);
            console.log(resData.restaurants);
            $('.cardio').append(`<hr>`);
            $.each(resData.restaurants, function (index, value) {
                console.log(value)
                var name = value.restaurant.name;
                console.log(name);
                var city = value.restaurant.location.city;
                console.log(city);
                var rating = value.restaurant.aggregate_rating;
                console.log(rating)
                var cuisine = value.restaurant.cuisines;
                // console.log(cuisines);
                var image = value.restaurant.thumb;
                console.log(image);
                var price = value.restaurant.average_cost_for_two;
                console.log(price);
                console.log(contact);
                var contact = value.restaurant.phone_numbers;
                var visit = value.restaurant.menu_url;

                $('.cardio').append(`
            <br>
            <div class="columns featured-post is-multiline boss">
                <div class="column is-12 post">
                    <article class="columns featured">
                        <div class="column is-3 post-img ">
                            <br>
                            <img src="${image}" alt="">
                        </div>
                        <!-- <div class="cardio"> -->
                        <div class="column is-5 featured-content va">
                            <div><br>
                                <h3 class="heading post-category">${city}</h3>
                                <h1 class="title post-title">${name}</h1>
                                <p class="post-excerpt">${contact}</p>
                                <br>
                                <div class="button-section" id="browse">
                                    <button class="go-button button is-success">Browse</button>
                                </div>
                            </div>

                        </div>
                        <!-- </div> -->
                    </article>
                </div>
            </div>
         
          
            `);

            })

        });
    }

    userAction();
})