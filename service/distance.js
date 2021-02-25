var request = require('request');

 

//const apiKey = process.env.ZIPCODE_API_KEY || "ZGsF42aqzkGempHoQsxvN211YZeZnLz5cvEk4Vp2heZjOY9NAR1pLhLujJzLz3ky";
const apiKey ="nJqkMyLbDY2ALHRtg6exw8T0wxX2i1BgGdLc9fs4wdnYBCCynAWHoZxs3py6dG9I";
const zipcodeURL = 'https://www.zipcodeapi.com/rest/';

 

var distance = {
    find: function(req,res, next) {
        request(zipcodeURL + apiKey + "/state-zips.json/" + req.params.zipcode1,
        function(error, response, body) {
            if(!error && response.statusCode == 200) {
                response = JSON.parse(body);
                res.send(response);
            } else {
                console.log(response.statusCode + response.body);
                res.send({distance: -1});
            }
        });
    }
};

 

module.exports = distance;