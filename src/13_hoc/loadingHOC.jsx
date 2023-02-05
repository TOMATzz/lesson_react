import React, { Component } from "react";
import './loadingHOC.css'
//import { BrowserRouter as Router, Link } from 'react-router-dom'

// const AppLink = (props) => ({
//    render: () => (
//       <Link {...props} activeClassName="active" />


//    )
// })


// class HoC extends Component {
//    render() {

//       return (
//          <Router>
//             <nav>
//                <AppLink to="/">  Home  </AppLink>
//                <AppLink to="/port">  Portfolio  </AppLink>
//                <AppLink to="/contacts" > Contacts  </AppLink>
//             </nav>
//          </Router>
//       )

//    }
// }
// export default HoC;
const isEmpty = (prop) => (
   prop === null ||
   prop === undefined ||
   (prop.hasOwnProperty("length") && prop.length === 0) ||
   (prop.constructor === Object && Object.keys(prop).length === 0)

);

const LoadingHOC = (loadingProp) => (WappedComponent) => {

   return class LoadingHOC extends Component {
      render() {
         return isEmpty(this.props[loadingProp]) ?
            <div className="loader" />
            : <WappedComponent{...this.props} />
      }
   }

}
export default LoadingHOC;