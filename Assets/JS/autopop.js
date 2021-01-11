$(document).ready(function () {
    var restaurant = $(this).attr("data-person");

    var inputValue = document.querySelector('.inputValue')


    function userAction() {

        let box = [];
        // async function getRestaurants() {
        let url1 = "https://developers.zomato.com/api/v2.1/search?count=20&lat=34.052235&lon=-118.243683&category=3";
        let url2 = "https://developers.zomato.com/api/v2.1/search?entity_id=295&entity_type=city";
        let url3 = "https://developers.zomato.com/api/v2.1/search?count=50&lat=40.2861946111111&lon=-97.6772406111111&radius=50M&sort=real_distance&order=asc";
        let h = new Headers();



        h.append('Accept', 'application/json')
        h.append('user-key', '578d0d78d47f16ab2fd8efe3a7794df5')
        let req = new Request(url1, {
            method: 'GET',
            headers: h,
            mode: 'cors'
        });
        fetch(req).then(function (response) {
            return response.json();
        }).then(function (jsonData) {
            var resData = (jsonData);
            console.log(resData[0]);
            console.log(resData.restaurants);
            $.each(resData.restaurants, function (index, value) {
                console.log(value)
                var name = value.restaurant.name;
                console.log(name);
                var city = value.restaurant.location.city;
                console.log(city);
                var rating = value.restaurant.user_rating.aggregate_rating;
                console.log(rating)
                var cuisine = value.restaurant.cuisines;
                console.log(cuisine);
                var image = value.restaurant.thumb;
                console.log(image);
                var photos = value.restaurant.photos_url
                var price = value.restaurant.average_cost_for_two;
                var contact = value.restaurant.phone_numbers;
                var visit = value.restaurant.menu_url;
                var reviews = value.restaurant.highlights
                console.log(reviews)

                console.log(price);
                console.log(contact);
               
                // $('.name').text(name);
                // $('.city').text(city);

                // $('.card').append('<h3 class="name">' + name + '</h3><p class="city">' + city + '</p><hr>');
                $('.nightFun').append(`
            <br>
            <div class="column post is-6">
        <article class="columns is-multiline">
          <div class="column is-12 post-img">
            <img src="${image}" alt="No thumbnail">
          </div>
          <div class="column is-12 featured-content ">
            <h3 class="heading post-category">${cuisine}</h3>
            <h1 class="title post-title">${name}</h1>
            <p class="post-excerpt">Users give this a score of ${rating}.</p>
            <p class="post-excerpt">What to expect: ${reviews.slice(1, 5)}.</p>
            <br>
            <a href="restaurant.html" class="button is-primary">View Restaurant</a>
          </div>
        </article>
      </div>
           
          
            `);

            })

        });
    }

    userAction();
})