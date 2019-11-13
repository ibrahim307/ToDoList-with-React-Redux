import React, { Component } from "react";
import "../Component/Todo.css";
import {addList} from '../Actions/Action'
import {connect} from 'react-redux'

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputList: "",
  
    };
  }
  handleChange = e => {
    this.setState({
      inputList: e.target.value
    });
  };
  
  // handleClick = () => {
  //   this.props.addList(this.state.newTodo);
  //   this.setState({
  //     newTodo: ""
  //   });
  // };
  isToggle = index => {
    this.setState({
      todo: this.state.todo.map((el, i) =>
        i === index ? { ...el, checked: !el.checked } : el
      )
    });
  };
  render() {
    return (
      <div className="container-initial-todo">
      
          <span className="title">Daily ToDo Lists</span>
          <br />
          <div className="form-inline">
            <input
              type="text"
              className="form-control mb-2 mr-sm-2 input-todo"
              id="inlineFormInputName2"
              placeholder="Enter your ToDo"
              onChange={this.handleChange}
              value={this.state.inputList}
            />
            <button
              
              className="btn btn-success mb-2"
              onClick={() =>{this.props.addList(this.state.inputList);this.setState({inputList:""})}}
            >
              Add
            </button>
          </div>
         
     </div>
    );
  }
}
const mapDispatchToProps=(dispatch)=>{
    return{
           addList:(payload)=>{
                dispatch(addList(payload))
           }
    }
}
export default connect(null,mapDispatchToProps)(ToDo);
