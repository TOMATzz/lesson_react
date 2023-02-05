import React, { Fragment, Component } from "react";


const Tab1 = () => {
   return <h1>Text of tab1 </h1>
}
const Tab2 = () => {
   return <h1>Text of tab2</h1>
}
const Tab3 = () => {
   return <h1>Text of tab3</h1>
}

const peopl = ['Jack', 'Max', 'Leo', 'Alex'];
const TABS_BTN = [
   {
      dataName: 1,
      title: 'Tab1',
      icon: '=',
   },
   {
      dataName: 2,
      title: 'Tab2',
      icon: '*',
   },
   {
      dataName: 3,
      title: 'Tab3',
      icon: '@',
   },

]

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
            {TABS_BTN.map(({ dataName, title, icon }) => (
               <button
                  key={`${dataName}-${title}`}
                  data-name={dataName}
                  onClick={this.handleTab}
               >{icon}{title}</button>
            )
            )
            }
            {activeTab === 1 && <Tab1 />}
            {activeTab === 2 && <Tab2 />}
            {activeTab === 3 && <Tab3 />}
            <ul>
               {peopl.map((person, index) => (<li key={index}>{person}</li>))}
            </ul>

         </Fragment>

      );
   }

}
