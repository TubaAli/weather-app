const request=require('request');

var getWeather=(lat, lng, callback) => {
  request({
    url:`https://api.darksky.net/forecast/8afb3b831b804c1ccdd1ba8a28783570/${lat},${lng}`,
    json:true
  },(error,response,body) =>{
    if(error){
      callback('Unable to connect to forecast.io server');
    }else if(response.statusCode===400){
      callback('Unable to fetch weather');
    }else if(response.statusCode===200){
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }});
};
module.exports.getWeather=getWeather;
