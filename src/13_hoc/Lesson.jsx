import React, { Component } from "react";
import LoadingHOC from './loadingHOC.jsx'

class AppComponentUI extends Component {
   render() {
      return (
         <div>{this.props.data.title}</div>
      )
   }
}

const AppComponent = LoadingHOC('data')(AppComponentUI);

class Lesson extends Component {

   state = {
      data: {},
   }
   componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
         .then(response => response.json())
         .then(data => this.updateState(data))
   }
   updateState = (data) => {
      window.setTimeout(() => {
         this.setState({ data })
      }, 3000)
   }

   render() {
      return (
         <AppComponent data={this.state.data} />
      )
   }
}



export default Lesson;