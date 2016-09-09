var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function() {
//     var {temp, location} = this.props;
//     return(
//       <p>It is {temp} in {location}.</p>
//     );
//   }
// });

// refactor above with stateless functional component
var WeatherMessage = (props) => {
  var {temp, location} = props;
  return(
    <p>It is {temp} in {location}.</p>
  );
};

// use ES6 destructuring....
var WeatherMessage = ({temp, location}) => {
  return(
    <p>It is {temp} in {location}.</p>
  );
};

module.exports = WeatherMessage;