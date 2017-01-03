var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var WeatherNextMessage = require('WeatherNextMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({

  getInitialState: function () {
    return {
      isLoading: false
    }
  },

  handleSearch: function(location){
    var that = this;


    this.setState({isLoading: true});

    openWeatherMap.getWeather(location).then(
      function (data) {
        setTimeout(function(){
          that.setState({
            main: data.main,
            weather: data.weather[1],
            wind: data.wind,
            clouds: data.clouds,
            location: data.name,
            isLoading: false
          })
       }, 1000);

    },  function(errorMessage){
      alert(errorMessage);
      that.setState({isLoading: false});

    });

  },


  render: function (){
    var {main, weather, wind, clouds, location, isLoading} = this.state;

    function renderMessage (){
      if(isLoading){
        return <h3>Fetching Weather ....</h3>;
      }else if(main){
        return <WeatherMessage temp={main.temp} location={location} tempMax={main.temp_max} tempMin={main.temp_min}/>;
      }
    }

    function renderNextMessage (){
      if(weather){
        return <WeatherNextMessage wind={wind.speed} clouds={clouds.all} humidity={main.humidity} weatherMain={weather.main} weatherDescription={weather.description}/>
      }
    }

    return(
      <div>
        <h3>Weather component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderNextMessage()}
      </div>
    )

  }
});
module.exports = Weather;
