var React = require('react');

var WeatherNextMessage = React.createClass({
  render: function(){
    
    var {wind, clouds, humidity, weatherMain, weatherDescription} = this.props;
    return(
      <div>
        <ul>
        <li>wind: {wind} mph</li>
        <li>clouds: {clouds} %</li>
        <li>humidity: {humidity}</li>
        <li>weather: {weatherMain} and {weatherDescription}</li>
        </ul>
      </div>
    );
  }
});

module.exports = WeatherNextMessage;
