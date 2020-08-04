import React from "react";
import FeatureList from "./FeatureList";

class Form extends React.Component {
  render() {
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        <FeatureList
          state={this.props.state}
          onUpdateFeature={this.props.onUpdateFeature}
        />
      </form>
    );
  }
}

export default Form;
