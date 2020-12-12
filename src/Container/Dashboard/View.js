import React from "react";
import ReactDOM from "react-dom";
import { Editor, EditorState, convertFromRaw } from "draft-js";

class View extends React.Component {
    state={
      con:localStorage.getItem('content')
    }
     
  render() {
      console.log(this.state.con)
    const contentState = convertFromRaw(JSON.parse(this.state.con));
    const editorState = EditorState.createWithContent(contentState);
    return (
      <div className="App" >
        <Editor editorState={editorState} readOnly={true} />
      </div>
    );
  }
}
export default View;