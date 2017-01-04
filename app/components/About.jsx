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
    <div>
      <h3>About Me</h3>
      <h6>My name is Tim Reed and as you can see I am that ninja!!!!!!!!</h6>
      <p>oh yeah my spirit name is Tehuti Ra Akenaten</p>
    </div>
  );
}


module.exports = About;
