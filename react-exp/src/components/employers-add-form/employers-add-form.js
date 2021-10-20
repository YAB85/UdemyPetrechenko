import React, { Component } from "react";
import "./employers-add-form.scss";

class EmployersAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: ""
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.name.trim().length >= 2 && this.state.salary !== '') {
      this.props.onAdd(this.state.name, this.state.salary);
      this.setState({
        name: '',
        salary: '',
        error: false
      })

    } else {
      this.setState({
        error: true
      })
    }
  }

  render() {
    const { name, salary, error } = this.state;
    let className = "form-control new-post-label";

    if (error === true) {
      className += ' red';
    } 


    return (
      <div className="app-add-form">
        <h3>Add new employee</h3>
        <form className="add-form d-flex" onSubmit={this.onSubmit}>
          <input
            type="text"
            className={className}
            placeholder="What is his/her name?"
            name="name"
            value={name}
            onChange={this.onValueChange}
          />
          <input
            type="number"
            className={className}
            placeholder="Salary $?"
            name="salary"
            value={salary}
            onChange={this.onValueChange}
          />

          <button type="submit" className="btn btn-outline-light">
            Add
          </button>
        </form>
      </div>
    );
  }
}

/* const EmployersAddForm = () => {
  return (
    <div className="app-add-form">
      <h3>Add new employee</h3>
      <form className="add-form d-flex">
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="What is his/her name?"
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="Salary $?"
        />

        <button type="submit" className="btn btn-outline-light">
          Add
        </button>
      </form>
    </div>
  );
} */

export default EmployersAddForm;
