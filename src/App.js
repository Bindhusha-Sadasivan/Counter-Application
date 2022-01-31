// import logo from "./logo.svg";
import React from "react";
import Navbar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

class App extends React.Component {
  constructor(props) {
    super(props);
    // console.log("App-Constructor");
    this.state = {
      counters: [
        { id: 1, value: 1 },
        { id: 2, value: 2 },
        { id: 3, value: 3 },
        { id: 4, value: 4 },

        // { id: 1 },
        // { id: 2 },
        // { id: 3 },
        // { id: 4 },
      ],
    };
  }

  // componentDidMount() {
  //   console.log("App Mounted");
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("PREV PROPS", prevProps);
  //   console.log("PREV STATE", prevState);
  //   if (prevProps.counters.value !== this.props.counters.value) {
  //     console.log("AJAX CALL & get new data from the server");
  //   }
  // }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    // console.log("Event handler called", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    // console.log("RESETTED");
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  render() {
    // console.log("App Rendered");
    return (
      <div>
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onDecrement={this.handleDecrement}
          />
        </main>
      </div>
    );
  }
}

export default App;
