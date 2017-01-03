var React = require('react');

var WeatherNextMessage = React.createClass({
  render: function(){

    var {wind, clouds, humidity, weatherMain, weatherDescription} = this.props;
    return(
      <div>
        <h3>wind: {wind} mph</h3>
        <h3>clouds: {clouds} %</h3>
        <h3>humidity: {humidity}</h3>
        <h3>weather: {weatherMain} and {weatherDescription}</h3>
      </div>
    );
  }
});

module.exports = WeatherNextMessage;
