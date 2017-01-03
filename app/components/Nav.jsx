import React from 'react';
var {Link, IndexLink} = require('react-router');
// var About = require('About');
// var Examples = require('Examples');
// var Extra = require('Extra');

//Original Code
// var Nav = React.createClass({
//   render: function () {
//     return(
//       <div>
//       <h2>Nave components</h2>
//       <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
//       <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
//       <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
//       <Link to="/extra" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Extra</Link>
//       </div>
//     );
//   }
// });


   
var Nav = () => {
  return(
    <div>
    <h2>Nave components</h2>
    <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
    <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
    <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
    <Link to="/extra" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Extra</Link>
    </div>
  );
}

module.exports = Nav;
