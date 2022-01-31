import React from "react";

class Counter extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       count: 1,
  //     };
  //   }

  // state = {
  //   value: this.props.counter.value,
  //   // count: 0,
  //   // tags: ["Onion", "Tomato", "Brinjal", "Raddish"],
  //   // tags: [],
  // };

  //   styles = {
  //     fontSize: 50,
  //     fontWeight: "bold",
  //   };

  //   formatCount = () => {
  //     return this.state.count === 0 ? <h1>Zero</h1> : <h1>{this.state.count}</h1>;
  //   };

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  // renderTags() {
  //   if (this.state.tags.length === 0) return <h1>There are no Tags!!!</h1>;
  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  // constructor() {
  //   super();
  //   // console.log("Constructor", this);
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // handleIncrement() {
  //   console.log("Increment clicked!!!", this);
  // }

  // handleIncrement = (product) => {
  //   // console.log("Increment Clicked", this);
  //   console.log(product);
  //   this.setState({ count: this.state.count + 1 });
  // };

  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: 1 });
  // };

  render() {
    // console.log("Counter Rendered");
    // console.log("Props", this.props);
    // let classes = "badge m-2 bg-";
    // classes += this.state.count === 0 ? "warning" : "primary";

    return (
      <div>
        <div className="row">
          <div className="col">
            <h1>Counter Application</h1>

            {this.props.children}

            {/* <span style={this.styles} className="badge bg-primary m-2"> */}
            {/* <span style={{ fontSize: 50 }} className="badge bg-primary m-2"> */}
            {/* <span className="badge bg-primary m-2">{this.formatCount()}</span> */}
            {/* <span className={classes}>{this.formatCount()}</span> */}

            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              // onClick={() => this.handleIncrement({ product: "one" })}
              className="btn btn-primary btn-sm"
            >
              +
            </button>

            <button
              onClick={() => {
                this.props.onDecrement(this.props.counter);
              }}
              className="btn btn-secondary btn-sm m-2"
            >
              -
            </button>

            {/* <br />
        <br /> */}

            <button
              onClick={() => this.props.onDelete(this.props.counter.id)}
              className="btn btn-danger m-2"
            >
              Delete
            </button>

            {/* <br />
              <br /> */}

            {/* <button
          onClick={this.props.onReset}
          className="btn btn-secondary btn-sm m-2"
        >
          Reset
        </button> */}

            {/* <button onClick={this.doHandleIncrement}>Increment One</button> */}

            {/* <h1>List</h1>

        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}

            {/* <div>
          {this.state.tags.length === 0 && <h1>Please Create New tags!!!</h1>}
          {this.renderTags()}
        </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
