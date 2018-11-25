//Yelp API
const apiKey = '82hA8I3xVnWx5cNlmZ3uIYTtmQKLR9qe4amKkmij3kTFwyYcDENxUA4KTJn20b-vu9ABeWDoJkuQxQrieG2YES3t1i2jblSHX4kdNrqSAGIpEVxSE1YjUOhaYU3rW3Yx';

//adding cors anywhere to bypass restriction
const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        //console.log('getting list');
        return jsonResponse.businesses.map(business => {
          console.log('json here');
          return {
          id: business.id,
          imageSrc: business.image_url,
          url: business.url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
          }
        })
      }
    })
  }
};

export default Yelp;
