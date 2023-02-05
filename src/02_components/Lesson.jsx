import React, { Component } from "react";
import PropTypes from "prop-types";


export const Counter = ({ counter = 0 }) => {

   //console.log(counter, func, number, string)
   return <h1> {`Counter component. Counter value is:${counter}`}
   </h1>
}
export const Button = () => {
   return <button>Simple button</button>
}
// Counter.propTypes = {
//    counter: PropTypes.number.isRequired,
//    func: PropTypes.func,
//    number: PropTypes.number,
//    string: PropTypes.string,
// }

// Counter.defaultProps = {
//    func: () => { },
//    number: 0,
//    string: '',
// }
// class CounetrButton extends Component {
//    state = {
//       counter: 0
//    }
export class Lesson extends Component {

   static propTypes = {
      children: PropTypes.element,
   }
   static defaultProps = {
      children: null,
   }
   state = {
      counter: 0
   }

   handleClic = () => {
      this.setState(({ counter }) => ({
         counter: ++counter,

      }))

   }


   render() {
      // console.log(this.state);
      // console.log(this.prevState);
      const { counter } = this.state;
      const { children, child } = this.props;
      // console.log(child);
      return (
         <div>
            {child}

            <div>{counter}</div>


            {children}

            <button onClick={this.handleClic}>+1</button>
         </div>
      );
   }
}
//export default CounetrButton;