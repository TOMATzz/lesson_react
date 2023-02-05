import React, { Component } from "react";
class CounetrButton extends Component {
   state = {
      counter: 0,

   }

   handleClick = () => {
      console.log(this.state);

      this.setState(({ counter }) => ({
         counter: ++counter,
      }))

   }

   render() {

      const { counter } = this.state;
      return (
         <div>
            <div>{counter}</div>
            <button onClick={this.handleClick}>+1</button>
         </div>

      );
   }
}


export default CounetrButton;