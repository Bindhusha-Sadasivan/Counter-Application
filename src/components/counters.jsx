import React from "react";
import Counter from "./counter";

class Counters extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     counters: [
  //       { id: 1, value: 1 },
  //       { id: 2, value: 2 },
  //       { id: 3, value: 3 },
  //       { id: 4, value: 4 },

  //       // { id: 1 },
  //       // { id: 2 },
  //       // { id: 3 },
  //       // { id: 4 },
  //     ],
  //   };
  // }

  // handleIncrement = (counter) => {
  //   const counters = [...this.state.counters];
  //   const index = counters.indexOf(counter);
  //   counters[index] = { ...counter };
  //   counters[index].value++;
  //   this.setState({ counters });
  // };

  // handleDelete = (counterId) => {
  //   // console.log("Event handler called", counterId);
  //   const counters = this.state.counters.filter((c) => c.id !== counterId);
  //   this.setState({ counters });
  // };

  // handleReset = () => {
  //   const counters = this.state.counters.map((c) => {
  //     c.value = 0;
  //     return c;
  //   });
  //   this.setState({ counters });
  // };

  render() {
    // console.log("Counters Rendered");
    const { onReset, counters, onDelete, onIncrement, onDecrement } =
      this.props;
    // console.log("Props", this.props);
    return (
      <div>
        {counters.map((counter) => (
          //   <Counter key={counter.id} />

          <Counter
            key={counter.id}
            // value={counter.value}
            // id={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onReset={onReset}
            onDecrement={onDecrement}
          >
            <h4>Counter Number {counter.id}</h4>
          </Counter>
        ))}

        <br />
        <br />

        <button onClick={onReset} className="btn btn-secondary btn-sm m-2">
          Reset
        </button>
      </div>
    );
  }
}

export default Counters;
