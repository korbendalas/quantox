import axios from 'axios';
export const currentWeatherAction= (term)=>{

    return async (dispatch)=> {
        const response =  await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${term},srb&mode=json&units=metric`,
            {
            params: {APPID:"bd6448f87c881e9232db9cd5a7ede427"}
             })


        dispatch({ 
             type:'FETCH_CURRENT_WEATHER',
            payload:response.data
            });
      
    };
};

export const forecastAction= (term)=>{

    return async (dispatch)=> {  
        const response =  await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${term}&mode=json&units=metric`,
            {
            params: {APPID:"bd6448f87c881e9232db9cd5a7ede427"}
             })


        dispatch({ 
             type:'FETCH_FORECAST',
            payload:response.data
            });
      
    };
};