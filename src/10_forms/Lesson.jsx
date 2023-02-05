import React, { Component, Fragment } from "react";

class Form extends Component {
   state =
      {
         inputText: "",
         textareaText: "",
         selectText: "",
         showData: {
            name: "",
            text: "",
            position: "",
            selectText: "",
         },
      }
   handleImputChange = ({ target: { value } }) => {
      this.setState({
         inputText: value,
      })
   }
   handleTextChange = ({ target: { value } }) => {
      this.setState({
         textareaText: value,
      })
   }
   handleSelectChange = ({ target: { value } }) => {
      this.setState({
         selectText: value,
      })
   }
   handleShow = (e) => {
      e.preventDefault();
      const { inputText, textareaText, selectText } = this.state;

      this.setState({
         inputText: "",
         textareaText: "",
         showData: {
            name: inputText,
            text: textareaText,
            position: selectText,
         }

      })
   }
   render() {
      const { inputText, textareaText, selectText, showData } = this.state;
      const { name, text, position } = showData;
      return (
         <Fragment>
            <form>
               {/* {Input} */}
               <label>
                  Name:
                  <input type='text' name='name' value={inputText} onChange={this.handleImputChange} />
               </label>
               {/* {Textarea} */}<br />
               <label htmlFor="text"> Text: </label>
               <textarea id="text" value={textareaText} onChange={this.handleTextChange} />

               {/* {Button} */} < br />
               <button onClick={this.handleShow}>Show</button>
               {/* {Select} */}< br />
               <select value={selectText} onChange={this.handleSelectChange}>
                  <option value="Front-end-developer">Front-end-developer</option>
                  <option value="Back-end-developer">Back-end-developer</option>
               </select>


            </form>
            <h2> {name}</h2>
            <h3>{text}</h3>
            <h3>{position}</h3>
         </Fragment>
      );
   }
}
export default Form;
