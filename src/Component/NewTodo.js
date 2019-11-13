import React from "react";
import "../Component/Todo.css";
import { deleteListe, toggle, editTodo, editText } from "../Actions/Action";
import { connect } from "react-redux";
const NewTodo = props => {
  return (
    <div className="container-Todo ">
      {props.todoList.map((el, i) => (
        <div key={i} className="container-newTodo">
          <input
            type="checkbox"
            className="checkbox"
            onClick={() => props.toggle(i)}
          />
          <input
            type="text"
            className={
              el.checked
                ? "checked display-form-control"
                : el.edit
                ? "form-control"
                : "display-form-control"
            }
            value={el.todo}
            id="validationTooltip03"
            onChange={e => props.edit(i, e.target.value)}
            readOnly={!el.edit}
          />
          <div className="setting-button">
            <button
              type="button"
              class={el.edit ? "btn btn-success" : "btn btn-warning"}
              onClick={() => props.editText(i)}
            >
              {el.edit ? (
                <i class="fas fa-check"></i>
              ) : (
                <i class="fas fa-edit"></i>
              )}
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => props.delete(i)}
            >
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    todoList: state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    delete: payload => {
      dispatch(deleteListe(payload));
    },
    toggle: payloeadIndex => {
      dispatch(toggle(payloeadIndex));
    },
    edit: (payloadId, payload) => {
      dispatch(editTodo(payloadId, payload));
    },
    editText: payload => {
      dispatch(editText(payload));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewTodo);
