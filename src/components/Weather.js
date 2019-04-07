import React from 'react';
import {connect} from 'react-redux';
import {currentWeatherAction,forecastAction} from '../actions';

import TodayWeather from './TodayWeather';
import NextDay from './NexDay';
class Weather extends React.Component{
    state={
        term:""
    }
    

 //Prevent forms default behavior
    onFormSubmit=(e)=>{
        e.preventDefault();
       //insert action creator here

       this.props.currentWeatherAction(this.state.term);
       this.props.forecastAction(this.state.term);
      
        }

    render(){
        return(
            <div className="weather">
                <div className="weather-container">

                <form className='input-form' onSubmit={this.onFormSubmit}>
                    {/* <label>Type your city:</label> */}
                    <input type="text" value={this.state.term} placeholder="Enter city name" onChange={e=>this.setState({term:e.target.value})}/>
                </form>
                
                   
                <TodayWeather weather={this.props.weather} />
              {      console.log(this.props.weather)}
                 <NextDay  forecast={this.props.forecast}/>   
                     
                </div>
            </div>
        )
    }
};

const mapStateToProps =(state)=>{
     //console.log(state);
    return {weather: state.weather,
             forecast: state.forecast                   };
    };


export default connect(mapStateToProps, {currentWeatherAction,forecastAction})(Weather);