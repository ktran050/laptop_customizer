import React from "react";
import SummaryTotal from "./SummaryTotal";
import SummaryOption from "./SummaryOption";

class Summary extends React.Component {
  render() {
    return (
      <section className="main__summary">
        <h2>Your cart</h2>

        <SummaryOption state={this.props.state} />

        <SummaryTotal state={this.props.state} />
      </section>
    );
  }
}

export default Summary;
