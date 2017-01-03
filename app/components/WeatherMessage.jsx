var React = require('react');

//Original code
// var WeatherMessage = React.createClass({
//   render: function(){
//     var {temp, location, tempMax, tempMin} = this.props;
//     return(
//       <div>
//         <h3>its {temp} in {location} with a high of {tempMax} and a low of {tempMin}</h3>
//       </div>
//     );
//   }
// });

var WeatherMessage = ({temp, location, tempMax, tempMin}) => {
  //var {temp, location, tempMax, tempMin} = props;
  return(
    <div>
      <h3>its {temp} in {location} with a high of {tempMax} and a low of {tempMin}</h3>
    </div>
  );
}
module.exports = WeatherMessage;
