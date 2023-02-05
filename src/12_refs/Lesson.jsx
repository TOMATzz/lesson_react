import React, { Component, Fragment } from "react";

class Ref extends Component {
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

   inputRef = React.createRef();
   textareaRef = React.createRef();
   selectRef = React.createRef();


   handleChange = () => {

      this.setState({
         inputText: this.inputRef.current.value,
         textareaText: this.textareaRef.current.value,
         selectText: this.selectRef.current.value,
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
                  <input ref={this.inputRef} type='text' name='name' value={inputText} onChange={this.handleChange} />
               </label>

               {/* {Textarea} */}<br />
               <label htmlFor="text"> Text: </label>

               <textarea ref={this.textareaRef} id="text" value={textareaText} onChange={this.handleChange} />

               {/* {Button} */} < br />
               <button onClick={this.handleShow}>Show</button>

               {/* {Select} */}< br />
               <select ref={this.selectRef} value={selectText} onChange={this.handleChange}>
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
export default Ref;
