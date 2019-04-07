import React from 'react';

class TodayWeather extends React.Component{
 
    

    
    render(){
      
        let image;
        if(this.props.weather.weather){
         image = `http://openweathermap.org/img/w/${this.props.weather.weather[0].icon}.png`;
           
        }else{
        return "";
        }
        
      

        return(
            <div className="today-weather">
                <div className="today-weather-left">

                       
                        <img className="weather-img" src={image}/>
                        <h2 className="current-temp">{this.props.weather.main?`${this.props.weather.main.temp} ˚C`:"Loading..."}</h2>
                        <h4 className="weather-description"> {this.props.weather.weather?` ${this.props.weather.weather[0].description} `:"Loading..."}</h4>
                </div>

                <div className="today-weather-right">
                <h3 className="city-name">{this.props.weather.name?`City: ${this.props.weather.name} `:"Loading..."} </h3> 
              <h3 className="today-humidity">{this.props.weather.main?`Humidity: ${this.props.weather.main.humidity}%`:"Loading..."}</h3>  
              <h3 className="today-pressure">{this.props.weather.main?`Pressure : ${this.props.weather.main.pressure} mb`:"Loading..."} </h3> 
              <h3 className="today-pressure">{this.props.weather.main?`Min : ${this.props.weather.main.temp_min} ˚C`:"Loading..."} </h3>     
              <h3 className="today-pressure">{this.props.weather.main?`Max : ${this.props.weather.main.temp_max} ˚C`:"Loading..."} </h3>  
              <h3 className="today-pressure">{this.props.weather.main?`Wind : ${this.props.weather.wind.speed} km/h`:"Loading..."} </h3> 
        </div>
                 
           
            </div>
        )
    }

    
}

export default TodayWeather;