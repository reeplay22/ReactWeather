var React = require('react');

// var WeatherNextMessage = React.createClass({
//   render: function(){
//
//     var {wind, clouds, humidity, weatherMain, weatherDescription} = this.props;
//     return(
//       <div>
//         <ul className="text-center">
//         <li>wind: {wind} mph</li>
//         <li>clouds: {clouds} %</li>
//         <li>humidity: {humidity}</li>
//         <li>weather: {weatherMain} and {weatherDescription}</li>
//         </ul>
//       </div>
//     );
//   }
// });

var WeatherNextMessage = ({wind, clouds, humidity, weatherMain, weatherDescription}) => {
  return(
    <div>
      <ul className="text-center">
      <li>wind: {wind} mph</li>
      <li>clouds: {clouds} %</li>
      <li>humidity: {humidity}</li>
      <li>weather: {weatherMain} and {weatherDescription}</li>
      </ul>
    </div>
  );
}

module.exports = WeatherNextMessage;
