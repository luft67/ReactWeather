var React = require('react');

// var Examples = React.createClass({
//   render: function() {
//     return (
//       <h3>Examples Component</h3>
//     ); 
//   }
// });

// refactor above using stateless functional component
var Examples = (props) => {
  return (
    <h3>Examples Component!</h3>
  ); 
};

module.exports = Examples;