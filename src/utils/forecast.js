const request =require("request")

const forecast=(latitude,longitude,callback)=>{
    const url = "https://api.darksky.net/forecast/c3d2dcaaeb2baace02c720fdeaf965ec/"+latitude+","+longitude+"?units=si&lang=en"
    request({url,json:true},(error,{body})=>{
        if(error)
        {
            callback('Unable to connect to weather service',undefined)
        }else if(body.error)
        {
            callback("Unable to find the location coordinate Error",undefined)
        }
        else
        {
            callback(undefined, body.daily.data[0].summary + " It is currently " + body.currently.temperature + " degree celcius .There is " + body.currently.precipProbability + " % chance of rain. With Temprature high of " + body.daily.data[0].temperatureHigh + "Degree Celcius and Temperature Low of " + body.daily.data[0].temperatureLow+"Degree celcius")
        }

    })
    
}
module.exports=forecast