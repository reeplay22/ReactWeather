var React = require('react');
var Nav = require('Nav');

//original code
// var Main = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <Nav/>
//         <h1>Hello!! This is the main components</h1>
//         {this.props.children}
//       </div>
//     );
//   }
// });


var Main = (props) => {
  return (
    <div>
      <Nav/>
      <h1>Hello!! This is the main components</h1>
      {props.children}
    </div>
  );
}

module.exports = Main;
