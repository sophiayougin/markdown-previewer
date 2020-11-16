import React from 'react';
import './App.css';
let marked = require('marked');
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      markdown : ''
    }
  }
  handleChange = (e) =>{
    this.setState({
      markdown: e.target.value
    });
  }
  render(){
    var inputStyle = {
      width: "400px",
      height: "50vh",
      marginLeft: "auto",
      marginRight: "auto",
      padding:"10px"
    };
    var outputStyle = {
      width: "400px",
      height: "50vh",
      backgroundColor: "#DCDCDC",
      marginLeft: "auto",
      marginRight: "auto",
      padding:"10px"
    };
    return(
      <div className='App'>
        <h1 className='heading'>Markdown previewer</h1>
        <div className='container'>
          <div className='left-container'>
            <h3 className='sub-heading'>Input</h3>
            <textarea className="input"
                      value={this.state.markdown}
                      onChange={this.handleChange}
                      style={inputStyle}>
            </textarea>;
          </div>
          <div className='right-container'>
            <h3 className='sub-heading'>Preview</h3>
            <div className='output'
                style={outputStyle}
                dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }}>
            </div>
          </div>
        </div>
        <div className='footer'>
          <p>Type markdown syntax in input(eg: # Header or *This text will be italic* )</p>
        </div>
      </div>
    )
  }
}


export default App;
