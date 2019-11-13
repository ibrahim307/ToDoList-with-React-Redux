import React, { Component } from "react";
import "../Component/Todo.css";

import { deleteListe,toggle,editTodo,editText} from "../Actions/Action";
import {connect} from "react-redux";

class NewTodo extends Component {
 
  render() {
    return (
      <div className="container-Todo ">
        {this.props.todoList.map((el, i) => (
          <div
            key={i}
            className="container-newTodo"
          >
            <input
              type="checkbox"
              className="checkbox"
              
              onClick={()=>this.props.toggle(i)}
            />
            <input
              type="text"
              className={el.checked?"checked":"form-control" }
              value={el.todo}
              id="validationTooltip03"
              onChange={(e)=>this.props.edit(i,e.target.value)}
              readOnly={!el.edit}

            />
            {/* <input type="checkbox"    onClick={()=>this.props.toggle(i)} /><input type="text" className={el.checked?"not-checked":"checked"} value={el.title} onChange={this.handleChange}/> */}
            <div className="setting-button">
              <button type="button" class="btn btn-warning" onClick={()=>this.props.editText(i)}>
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => this.props.delete(i)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        {/* <div
          style={{
            backgroundColor: "red",
            width: "400px",
            height: "400px",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: "-1"
          }}
        ></div>

        <div
          style={{
            backgroundColor: "pink",
            width: "200px",
            height: "200px",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1
          }}
        ></div>
        <div
          style={{
            backgroundColor: "blue",
            width: "300px",
            height: "300px",
            position: "absolute",
            top: 0,
            left: 0
          }}
        ></div> */}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    todoList: state
  }
}
const mapDispatchToProps = dispatch => {
  return {
    delete: payload => {
      dispatch(deleteListe(payload));
    }
  ,toggle:payloeadIndex=>{
    dispatch(toggle(payloeadIndex))
  },edit:(payloadId,payload)=>{
    dispatch(editTodo(payloadId,payload))
  },editText:(payload)=>{
    dispatch(editText(payload))
  }
}}
export default connect(mapStateToProps,mapDispatchToProps)(NewTodo);
