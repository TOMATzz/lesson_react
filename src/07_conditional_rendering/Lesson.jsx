import React, { Fragment, Component } from "react";

// const ValidationMsg = ({ val }) => {
//    // console.log({ val });
//    // if (val >= 10) {
//    //    return <h2>Grate than 10</h2>
//    // } else {
//    //    return <h3>Less then<em> 10</em> </h3>
//    // }
// }
// export const App = () => {
//    const val = 5;
//    return (
//       // <ValidationMsg val={8} />
//       <div>
//          {val >= 10 ? <h2>Grate than 10</h2> : <h3>Less then<em> 10</em> </h3>}

//       </div>
//    );

// }
const Tab1 = () => {
   return <h1>Text of tab1 </h1>
}
const Tab2 = () => {
   return <h1>Text of tab2</h1>
}
const Tab3 = () => {
   return <h1>Text of tab3</h1>
}

export class App extends Component {
   state = {
      activeTab: 1,
   }
   handleTab = (e) => {
      this.setState({
         activeTab: +e.target.getAttribute('data-name'),

      })
   }

   render() {

      const { activeTab } = this.state;

      // console.log(this.state);
      return (
         <Fragment>
            <button data-name={1} onClick={this.handleTab}>Tab1</button>
            <button data-name={2} onClick={this.handleTab}>Tab2</button>
            <button data-name={3} onClick={this.handleTab}>Tab3</button>
            {activeTab === 1 && <Tab1 />}
            {activeTab === 2 && <Tab2 />}
            {activeTab === 3 && <Tab3 />}
         </Fragment>

      );
   }

}
