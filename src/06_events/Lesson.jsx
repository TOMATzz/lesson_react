import React, { Component } from "react";
import PropTypes from "prop-types";

const MyLink = ({ text, onClick }) => {
   return <a href="/test" onClick={onClick}>{text} </a>
};

MyLink.propTypes = {
   text: PropTypes.string,
   onClick: PropTypes.func,
}

MyLink.defaultProps = {
   text: 'link',
   onClick: () => { },
}

class App extends Component {

   handleClick = (e) => {
      e.preventDefault();
      console.log('Cliced on lin');
      this.test();
   }

   render() {
      return (

         <MyLink onClick={this.handleClick} />

      );
   }

}
export default App;