var React = require('react');

//original code

// var About = React.createClass({
//   render: function (){
//     return(
//       <h3>About</h3>
//     );
//   }
// });

// this is a stateless function using arrowFunc of lambda to pass the return through the arrow from the createClass
var About = (props) => {
  return(
    <h3>About</h3>
  );
}


module.exports = About;
