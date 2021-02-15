import React, {Component} from 'react';
import Header from "UIcomponents/Header"
import MonacoEditor from 'react-monaco-editor';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '// type your code...',
    }
  }
  editorDidMount = (editor, monaco) =>  {
    console.log('editorDidMount', editor);
    editor.focus();
  }
  onChange = (newValue, e) => {
    console.log('onChange', newValue, e);
  }
  render() {
    const code = this.state.code;
    let w = window.innerWidth;
    let h = window.innerHeight-64-36;
    const options = {
      selectOnLineNumbers: true
    };
    return (
      <MonacoEditor
        width={w}
        height={h}
        language='yaml'
        theme="vs-dark"
        value={code}
        options={options}
        onChange={this.onChange}
        editorDidMount={this.editorDidMount}
      />
    );
  }
}

export default Header(Home);


