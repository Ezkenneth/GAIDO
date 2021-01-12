
let api = "578d0d78d47f16ab2fd8efe3a7794df5"

let url1 = "https://developers.zomato.com/api/v2.1/restaurant?res_id=16774318"

let url3 = "https://developers.zomato.com/api/v2.1/categories"

let url4 = "https://developers.zomato.com/api/v2.1/search?count=50&lat=40.2861946111111&lon=-97.6772406111111&radius=50M&sort=real_distance&order=asc"


// let url = URL(string: queryURL1)
// var request = URLRequest(queryURL: queryURL!)

// request.addValue("application/json", forHTTPHeaderField: "Accept")
// request.addValue(api, forHTTPHeaderField: "user-key")
// request.httpMehod = "GET"


// let sess = URLSession(configuration: .default)
// sess.dataTask(with: URLRequest, completionHandler: (Data?, URLResponse?, Error?) -> Void)
// }
let url2 = "https://developers.zomato.com/api/v2.1/cities?q=Ottawa"
var newVar = ""

let h = new Headers();
h.append('Accept', 'application/json')
h.append('user-key', '578d0d78d47f16ab2fd8efe3a7794df5')
let req = new Request(url4, {
    method: 'GET',
    headers: h,
    mode: 'cors'
});

fetch(req)
.then( (response)=>{
        if(response.ok){
            return response.json();
        } else {
            throw new Error('BAD HTTP');
        }
})
.then( (jsonData) =>{
        var resData = (jsonData)
        console.log(resData);

        for ( i = 0; i < resData.restaurants.length; i++){
            console.log(resData.restaurants[i].restaurant.name)
        }
        
       

        
})
.catch( (err)=>{
    console.log('ERROR:', err.message);
})




// var newVar = ""

// let h = new Headers();
// h.append('Accept', 'application/json')
// h.append('user-key', '578d0d78d47f16ab2fd8efe3a7794df5')
// let req = new Request(url1, {
//     method: 'GET',
//     headers: h,
//     mode: 'cors'
// });

// fetch(req)
// .then( (response)=>{
//         if(response.ok){
//             return response.json();
//         } else {
//             throw new Error('BAD HTTP');
//         }
// })
// .then( (jsonData) =>{
//         var resData = (jsonData)
//         console.log(resData);

        
        
       

        
// })
// .catch( (err)=>{
//     console.log('ERROR:', err.message);
// })



