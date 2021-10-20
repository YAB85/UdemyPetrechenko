import React from "react";
import "./app-filter.css";

/* class AppFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: ''
    }
  }

  

  render() {
    return (
      <div className="btn-group">
        <button className="btn btn-light" type="button">
          All employees
        </button>
        <button className="btn btn-outline-light" type="button">
          To increase
        </button>
        <button className="btn btn-outline-light" type="button">
          Salary more that 1000$
        </button>
      </div>
    );
  }
} */

const AppFilter = (props) => {
  const buttonsData = [
    { name: "all", label: "All employees" },
    { name: "rise", label: "To increase" },
    { name: "moreThen1000", label: "Salary more that 1000$" }
  ];

  const buttons = buttonsData.map(({ name, label }) => {
    const active = props.filter === name;
    const clazz = active ? "btn-light" : "btn-outline-light";
    return (
      <button className={`btn ${clazz}`} type="button" key={name} onClick={() => { props.onFilterSelect(name)}}>
        {label}
      </button>
    );
  });

  return (
    <div className="btn-group">
      {buttons}
    </div>
  );
};

export default AppFilter;
