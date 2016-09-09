var React = require('react');
var Nav = require('Nav');

// var Main = React.createClass({
//   render: function() {
//     return(
//       <div>    
//         <Nav />     
//         {this.props.children}
//       </div>       
//     );
//   }
// });

// refactor above using stateless functional component
var Main = (props) => {
  return(
    <div>    
      <Nav />     
      {props.children}
    </div>       
  );
};

module.exports = Main;