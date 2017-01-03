var React = require('react');

// original code
// var Examples = React.createClass({
//   render: function (){
//     return(
//       <h3>Examples</h3>
//     );
//   }
// });



// this is a stateless function using arrowFunc of lambda to pass the return through the arrow from the createClass
var Examples = (props) => {
  return(
    <div>
    <h3>Examples</h3>
    <p>I told you i could do it</p>
    <p> WE OUTCHEAAA!!!!!</p>
    </div>
  );
}

module.exports = Examples;
