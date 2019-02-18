import React, { Component, Fragment } from 'react';

const POSITION = [
  {
    id: 'fd',
    value: 'Front-end developer',
    title: 'Front-end developer',
  },
  {
    id: 'bd',
    value: 'Back-end developer',
    title: 'Back-end developer',
  },
]

class Form extends Component {

state = {
  inputText: '',
  textareaText: '',
  selectText: '',
  showData: {
    name: '',
    text: '',
    position: '',
  },

}

componentWillMount() {
  console.log('cwm', this.inputRef);
}
componentDidMount() {
  console.log('cdm', this.inputRef);
}

//Заменяем три метода одним
handleChange = () => {
  this.setState({
    inputText: this.inputRef.current.value,
    textareaText: this.textareaRef.current.value,
    selectText: this.selectRef.current.value,
  });
}

// handleInputChange = ({ target: { value } }) => {
// //  console.log(this.el.value);
//   this.setState({
//     inputText: value,
//   })
// }
//
// handleTextareaChange = ({ target: { value } }) => {
//   this.setState({
//     textareaText: value,
//   })
// }
//
// handleSelectChange = ({ target: { value } }) => {
//   this.setState({
//     selectText: value,
//   })
// }

handleShow = (e) => {
  e.preventDefault();
  const { inputText, textareaText, selectText } = this.state;
  this.setState({
    inputText: '',
    textareaText: '',
    selectText: '',
    showData: {
      name: inputText,
      text: textareaText,
      position: selectText,
    },
  })
}

//Создание ссылок старым методом
//getRef =(node) => { this.el = node };

//Создание ссылок новым методом
inputRef = React.createRef();
textareaRef = React.createRef();
selectRef = React.createRef();

  render() {
    const { inputText, textareaText, selectText, showData } = this.state;
    const { name, text, position } = showData;
    return (
    <Fragment>
      <form>
      {/*Input*/}
        <label >
          Name:
          <input /* ref={this.getRef} */ ref={this.inputRef} type="text" name="name" value={inputText} onChange={this./*handleInputChange*/handleChange} />
        </label>
        {/*Textarea*/} <br />
        <label htmlFor="text">Text:</label>
        <textarea ref={this.textareaRef} name="" id="" value={textareaText} onChange={this./*handleTextareaChange*/handleChange} />
        {/* Select */}
        <select ref={this.selectRef} value={selectText} onChange={this./*handleSelectChange*/handleChange}>
          {POSITION.map(({ id, value, title }) => (
            <option key={id} value={value}>{title}</option>
          ))}
        </select>
        {/*Button*/} <br />
        <button onClick={this.handleShow}>Show</button>
      </form>
      <h2>{name}</h2>
      <h3>{text}</h3>
      <h3>{position}</h3>
    </Fragment>
    );
  }
}
export default Form
