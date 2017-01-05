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
      errorMessage: undefined,
      location: undefined,
      main: undefined,
      weather:undefined,
      wind: undefined,
      clouds: undefined

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

          var newTemp = that.state.main.temp.substr(0, that.state.main.temp.length-2);


       }, 1000);




    },  function(data){
      that.setState({
        isLoading: false,
        errorMessage: data.message,
        errorCode: data.cod
       });

    });

  },

  componentDidMount: function () {
    var location = this.props.location.query.location;

    if(location && location.length > 0 ){
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },

  componentWillReceiveProps: function (newProps) {
    var location = newProps.location.query.location;

    if(location && location.length > 0 ){
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },

  render: function (){
    var {main, weather, wind, clouds, location, isLoading, errorMessage, errorCode} = this.state;



    function renderMessage (){
      if(isLoading){
        return <h3 className="text-center">Fetching Weather ....</h3>;
      }else if(main){
        return <WeatherMessage temp={main.temp} location={location} tempMax={main.temp_max} tempMin={main.temp_min}/>
      }
    }

    function renderNextMessage (){
      if(isLoading){
        return <h3 className="text-center">It takes a sec (literally)</h3>
      }else if(weather){
        return  <WeatherNextMessage wind={wind.speed} clouds={clouds.all} humidity={main.humidity} weatherMain={weather.main} weatherDescription={weather.description}/>;
      }
    }

    function renderError(){
      if (typeof errorMessage === 'string'){
        return(
          <ErrorModal errorMessage={errorMessage} errorCode={errorCode}/>
        )
      }
    }

    return(
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderNextMessage()}
        {renderError()}
      </div>
    )

  }
});
module.exports = Weather;
