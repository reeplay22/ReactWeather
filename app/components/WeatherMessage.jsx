var React = require('react');
var WeatherNextForm = require('WeatherNextForm');
var WeatherNextMessage = require('WeatherNextMessage');
var openWeatherMap = require('openWeatherMap');

var WeatherMessage = React.createClass({


  getInitialState: function () {
    return {
      holdBack: false,
    }
  },

  // sortData: function(today, tommorrow, thirdDay, fourthDay, fifthDay) {
  //
  //   this.state({
  //     todayDate: today.dt_txt,
  //     todayTemp: today.main.temp,
  //     todayTempMax: today.main.temp_max,
  //     todayTempMin: today.main.temp_min,
  //     todayWind: today.wind.speed,
  //     todayClouds: today.clouds.all,
  //     todayHumidity: today.main.humidity,
  //     todayDescription: today.weather.description,
  //
  //     tommorrowDate: tommorrow.dt_txt,
  //     tommorrowTemp: tommorrow.main.temp,
  //     tommorrowTempMax: tommorrow.main.temp_max,
  //     tommorrowTempMin: tommorrow.main.temp_min,
  //     tommorrowWind: tommorrow.wind.speed,
  //     tommorrowClouds: tommorrow.clouds.all,
  //     tommorrowHumidity: tommorrow.main.humidity,
  //     tommorrowDescription: tommorrow.weather.description,
  //
  //     thirdDayDate: thirdDay.dt_txt,
  //     thirdDayTemp: thirdDay.main.temp,
  //     thirdDayTempMax: thirdDay.main.temp_max,
  //     thirdDayTempMin: thirdDay.main.temp_min,
  //     thirdDayWind: thirdDay.wind.speed,
  //     thirdDayClouds: thirdDay.clouds.all,
  //     thirdDayHumidity: thirdDay.main.humidity,
  //     thirdDayDescription: thirdDay.weather.description,
  //
  //     fourthDayDate: fourthDay.dt_txt,
  //     fourthDayTemp: fourthDay.main.temp,
  //     fourthDayTempMax: fourthDay.main.temp_max,
  //     fourthDayTempMin: fourthDay.main.temp_min,
  //     fourthDayWind: fourthDay.wind.speed,
  //     fourthDayClouds: fourthDay.clouds.all,
  //     fourthDayHumidity: fourthDay.main.humidity,
  //     fourthDayDescription: fourthDay.weather.description,
  //
  //     fifthDayDate: fifthDay.dt_txt,
  //     fifthDayTemp: fifthDay.main.temp,
  //     fifthDayTempMax: fifthDay.main.temp_max,
  //     fifthDayTempMin: fifthDay.main.temp_min,
  //     fifthDayWind: fifthDay.wind.speed,
  //     fifthDayClouds: fifthDay.clouds.all,
  //     fifthDayHumidity: fifthDay.main.humidity,
  //     fifthDayDescription: fifthDay.weather.description
  //   })
  //
  // },

  handleSearchForecast: function (location) {
    var that = this;
    this.setState({
      //holdBack: true,
    });

    openWeatherMap.getForecast(location).then(
      function (data) {
          that.setState({
            //today: data.list[0],
            //tommorrow: data.list[1],
            //thirdDay: data.list[2],
            //fourthDay: data.list[3],
            //fifthDay: data.list[4],
            holdBack: false,

            todayDate: data.list[0].dt_txt,
            todayTemp: data.list[0].main.temp,
            todayTempMax: data.list[0].main.temp_max,
            todayTempMin: data.list[0].main.temp_min,
            todayWind: data.list[0].wind.speed,
            todayClouds: data.list[0].clouds.all,
            todayHumidity: data.list[0].main.humidity,
            todayDescription: data.list[0].weather.description,

            tommorrowDate: data.list[1].dt_txt,
            tommorrowTemp: data.list[1].main.temp,
            tommorrowTempMax: data.list[1].main.temp_max,
            tommorrowTempMin: data.list[1].main.temp_min,
            tommorrowWind: data.list[1].wind.speed,
            tommorrowClouds: data.list[1].clouds.all,
            tommorrowHumidity: data.list[1].main.humidity,
            tommorrowDescription: data.list[1].weather.description,

            thirdDayDate: data.list[2].dt_txt,
            thirdDayTemp: data.list[2].main.temp,
            thirdDayTempMax: data.list[2].main.temp_max,
            thirdDayTempMin: data.list[2].main.temp_min,
            thirdDayWind: data.list[2].wind.speed,
            thirdDayClouds: data.list[2].clouds.all,
            thirdDayHumidity: data.list[2].main.humidity,
            thirdDayDescription: data.list[2].weather.description,

            fourthDayDate: data.list[3].dt_txt,
            fourthDayTemp: data.list[3].main.temp,
            fourthDayTempMax: data.list[3].main.temp_max,
            fourthDayTempMin: data.list[3].main.temp_min,
            fourthDayWind: data.list[3].wind.speed,
            fourthDayClouds: data.list[3].clouds.all,
            fourthDayHumidity: data.list[3].main.humidity,
            fourthDayDescription: data.list[3].weather.description,

            fifthDayDate: data.list[4].dt_txt,
            fifthDayTemp: data.list[4].main.temp,
            fifthDayTempMax: data.list[4].main.temp_max,
            fifthDayTempMin: data.list[4].main.temp_min,
            fifthDayWind: data.list[4].wind.speed,
            fifthDayClouds: data.list[4].clouds.all,
            fifthDayHumidity: data.list[4].main.humidity,
            fifthDayDescription: data.list[4].weather.description

          })

        //  sortData(today, tommorrow, thirdDay, fourthDay,fifthDay);

    },  function(data){
      that.setState({
        holdBack: false,
        errorMessage: data.message,
        errorCode: data.cod
       });
    });

  },



  render: function () {

    var {temp, location, nextLocation, tempMax, tempMin, wind, clouds, humidity, weatherMain, weatherDescription, holdBack, today } = this.props;




    var { todayDate,
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
    fifthDayDescription  } = this.state;



    function renderNextMessage (){
      if(holdBack){
        return <h3 className="text-center">hold up AAAHHHHH!!!</h3>
      }else if(nextLocation){
        return  <WeatherNextMessage

          todayDate = {todayDate}
          todayTemp = {todayTemp}
          todayTempMax = {todayTempMax}
          todayTempMin = {todayTempMin}
          todayWind = {todayWind}
          todayClouds = {todayClouds}
          todayHumidity = {todayHumidity}
          todayDescription = {todayDescription}

          tommorrowDate = {tommorrowDate}
          tommorrowTemp = {tommorrowTemp}
          tommorrowTempMax = {tommorrowTempMax}
          tommorrowTempMin = {tommorrowTempMin}
          tommorrowWind = {tommorrowWind}
          tommorrowClouds = {tommorrowClouds}
          tommorrowHumidity = {tommorrowHumidity}
          tommorrowDescription = {tommorrowDescription}

          thirdDayDate = {thirdDayDate}
          thirdDayTemp = {thirdDayTemp}
          thirdDayTempMax = {thirdDayTempMax}
          thirdDayTempMin = {thirdDayTempMin}
          thirdDayWind = {thirdDayWind}
          thirdDayClouds = {thirdDayClouds}
          thirdDayHumidity = {thirdDayHumidity}
          thirdDayDescription = {thirdDayDescription}

          fourthDayDate = {fourthDayDate}
          fourthDayTemp = {fourthDayTemp}
          fourthDayTempMax = {fourthDayTempMax}
          fourthDayTempMin = {fourthDayTempMin}
          fourthDayWind = {fourthDayWind}
          fourthDayClouds = {fourthDayClouds}
          fourthDayHumidity = {fourthDayHumidity}
          fourthDayDescription = {fourthDayDescription}

          fifthDayDate = {fifthDayDate}
          fifthDayTemp = {fifthDayTemp}
          fifthDayTempMax = {fifthDayTempMax}
          fifthDayTempMin = {fifthDayTempMin}
          fifthDayWind = {fifthDayWind}
          fifthDayClouds = {fifthDayClouds}
          fifthDayHumidity = {fifthDayHumidity}
          fifthDayDescription = {fifthDayDescription}
          />;
      }
    }


    return(
      <div>
        <h5 className="text-center">its <span className="temp">{temp}</span> in {location} with a high of
          <span className="temp tempMax">{tempMax}</span> and low of <span className="temp tempMin">{tempMin}</span></h5>

            <div className="text-center">
              <ul className="text-left">
              <li>wind: {wind} mph</li>
              <li>clouds: {clouds} %</li>
              <li>humidity: {humidity}</li>
              <li>description: {weatherMain} and {weatherDescription}</li>
              </ul>
            </div>

            <div>
              <WeatherNextForm location={nextLocation} onSearchForecast={this.handleSearchForecast} />
            </div>

            <div>
              {renderNextMessage()}
            </div>
      </div>
    );
  }

})


module.exports = WeatherMessage;
