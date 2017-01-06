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

var WeatherNextMessage = ({
todayDate,
todayTemp,
todayTempMax,
todayTempMin,
todayWind,
todayClouds,
todayHumidity,
todayDescription,

tommorrowDate,
tommorrowTemp,
tommorrowTempMax,
tommorrowTempMin,
tommorrowWind,
tommorrowClouds,
tommorrowHumidity,
tommorrowDescription,

thirdDayDate,
thirdDayTemp,
thirdDayTempMax,
thirdDayTempMin,
thirdDayWind,
thirdDayClouds,
thirdDayHumidity,
thirdDayDescription,

fourthDayDate,
fourthDayTemp,
fourthDayTempMax,
fourthDayTempMin,
fourthDayWind,
fourthDayClouds,
fourthDayHumidity,
fourthDayDescription,

fifthDayDate,
fifthDayTemp,
fifthDayTempMax,
fifthDayTempMin,
fifthDayWind,
fifthDayClouds,
fifthDayHumidity,
fifthDayDescription }) => {


  return(<div>
    <div>
      <h6>Today: {todayDate}</h6>
      <div>
        <p>Temp: {todayTemp}</p>
        <p>Hi: {todayTempMax}</p>
        <p>Lo: {todayTempMin}</p>
        <p>wind: {todayWind}</p>
        <p>clouds {todayClouds}</p>
        <p>humidity: {todayHumidity}</p>
        <p>description: {todayDescription}</p>
      </div>
    </div>
    <div>
      <h6>Tommorrow: {tommorrowDate}</h6>
        <div>
          <p>Temp: {tommorrowTemp}</p>
          <p>Hi: {tommorrowTempMax}</p>
          <p>Lo: {tommorrowTempMin}</p>
          <p>wind: {tommorrowWind}</p>
          <p>clouds {tommorrowClouds}</p>
          <p>humidity: {tommorrowHumidity}</p>
          <p>description: {tommorrowDescription}</p>
        </div>
    </div>
    <div>
      <h6>ThirdDay: {thirdDayDate}</h6>
        <div>
          <p>Temp: {thirdDayTemp}</p>
          <p>Hi: {thirdDayTempMax}</p>
          <p>Lo: {thirdDayTempMin}</p>
          <p>wind: {thirdDayWind}</p>
          <p>clouds {thirdDayClouds}</p>
          <p>humidity: {thirdDayHumidity}</p>
          <p>description: {thirdDayDescription}</p>
        </div>
    </div>
    <div>
      <h6>FourthDay: {fourthDayDate}</h6>
        <div>
          <p>Temp: {fourthDayTemp}</p>
          <p>Hi: {fourthDayTempMax}</p>
          <p>Lo: {fourthDayTempMin}</p>
          <p>wind: {fourthDayWind}</p>
          <p>clouds {fourthDayClouds}</p>
          <p>humidity: {fourthDayHumidity}</p>
          <p>description: {fourthDayDescription}</p>
        </div>
    </div>
    <div>
      <h6>FifthDay: {fifthDayDate}</h6>
        <div>
          <p>Temp: {fifthDayTemp}</p>
          <p>Hi: {fifthDayTempMax}</p>
          <p>Lo: {fifthDayTempMin}</p>
          <p>wind: {fifthDayWind}</p>
          <p>clouds {fifthDayClouds}</p>
          <p>humidity: {fifthDayHumidity}</p>
          <p>description: {fifthDayDescription}</p>
        </div>
    </div>
  </div>);
}

module.exports = WeatherNextMessage;
