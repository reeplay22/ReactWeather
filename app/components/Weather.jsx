var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var WeatherNextMessage = require('WeatherNextMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal')

var Weather = React.createClass({

  getInitialState: function () {
    return {
      isLoading: false,
    }
  },

  handleSearch: function(location){
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

    openWeatherMap.getWeather(location).then(
      function (data) {
        setTimeout(function(){

          that.setState({
            main: data.main,
            weather: data.weather[0],
            wind: data.wind,
            clouds: data.clouds,
            location: data.name,
            isLoading: false
          })
       }, 1000);

    },  function(data){
      that.setState({
        isLoading: false,
        errorMessage: data.message
       });

    });

  },


  render: function (){
    var {main, weather, wind, clouds, location, isLoading, errorMessage} = this.state;

    function renderMessage (){
      if(isLoading){
        return <h3 className="text-center">Fetching Weather ....</h3>;
      }else if(main){
        return <WeatherMessage temp={main.temp} location={location} tempMax={main.temp_max} tempMin={main.temp_min}/>
      }
    }

    function renderNextMessage (){
      if(weather){
        return  <WeatherNextMessage wind={wind.speed} clouds={clouds.all} humidity={main.humidity} weatherMain={weather.main} weatherDescription={weather.description}/>;
      }
    }

    function renderError(){
      if (typeof errorMessage === 'string'){
        return(
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return(
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderNextMessage()}
        {renderError()}
      </div>
    )

  }
});
module.exports = Weather;
