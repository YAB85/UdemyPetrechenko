import React, { Component } from "react";
import "./app.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";
import BootstrapTest from "../../BootstrapTest";

const DynamicGreating = (props) => {
  return (
    <div className={"mb-3 p-3 border border-" + props.color}>
      {React.Children.map(props.children, (child) => {
        return React.cloneElement(child, {
          className: "shadow p-3 m-3 border rounded"
        });
      })}
    </div>
  );
};


const Message = (props) => {
  return (
    <h2>The counter is {props.counter}</h2>
  )
}

class Counter extends Component{
  state = {
    counter: 0
  }

  changeCounter = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1
    }))
  }

  render() {
    return (
      <>
        <button className={'btn btn-primary'} onClick={this.changeCounter}>
          Click Me
        </button>
        {this.props.render(this.state.counter)}
      </>
    )
  }
}


const HelloGreeting = () => {
  return (
    <div style={{'width': '600px', 'margin': '0 auto'}}>
      <DynamicGreating color={'primary'}>
        <h2>Hello world!</h2>
      </DynamicGreating>
    </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "John C.", salary: 800, increase: false, rise: true, id: 1 },
        { name: "Alex M.", salary: 3000, increase: true, rise: false, id: 2 },
        { name: "Carl W.", salary: 15000, increase: false, rise: false, id: 3 }
      ],
      term: "",
      filter: "all"
    };
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id)
      };
    });
  };

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: this.maxId++
    };

    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      };
    });
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      })
    }));
  };

  searchEmp = (items, term) => {
    if (items.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  filterPost = (items, filter) => {
    switch (filter) {
      case "rise":
        return items.filter((item) => item.rise);
      case "moreThen1000":
        return items.filter((item) => item.salary > 1000);
      default:
        return items;
    }
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { data, term, filter } = this.state;
    const employees = this.state.data.length;
    const increased = this.state.data.filter((item) => item.increase).length;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);
    return (



      <div className="app">
        <AppInfo employees={employees} increased={increased} />
        <HelloGreeting />
        <BootstrapTest
          left={
            <DynamicGreating color={"primary"}>
              <h2>This weel was hard</h2>
              <h2>Hello world!</h2>
            </DynamicGreating>
          }
          right={
            <div className="search-panel">
              <SearchPanel onUpdateSearch={this.onUpdateSearch} />
              <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
            </div>
          }
        />
        <EmployersList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        
        <Counter render={counter => (
          <Message counter={ counter }/>
          )}/>
        <BootstrapTest />
        <EmployersAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;

/* const index = data.findIndex(elem => elem.id === id);

      const before = data.slice(0, index);
      const after = data.slice(index + 1);

      const newArr = [...before, ...after]; */

/*  this.setState(({ data }) => {
    const index = data.findIndex((elem) => elem.id === id);

    const old = data[index];
    const newItem = { ...old, increase: !old.increase };
    const newArr = [
      ...data.slice(0, index),
      newItem,
      ...data.slice(index + 1)
    ];

    return {
      data: newArr
    };
  }); */

/* onToggleRise = (id) => {
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, rise: !item.rise}
        }
        return item;
      })
    }))
  }; */

/* function App() {

  const data = [
    { name: 'John C.', salary: 800, increase: false, id: 1 },
    { name: 'Alex M.', salary: 3000, increase: true, id: 2 },
    { name: 'Carl W.', salary: 15000, increase: false, id: 3}
  ]


  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployersList data={data} onDelete={id => console.log(id)} />
      <EmployersAddForm />
   </div>
  )
}
 */
