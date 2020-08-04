import React from "react";
import FeatureOption from "./FeatureOption";
import FEATURES from "./FeatureStore";

class FeatureOptions extends React.Component {
  render() {
    return FEATURES[this.props.feature].map((item) => (
      <FeatureOption
        state={this.props.state}
        item={item}
        feature={this.props.feature}
        onUpdateFeature={this.props.onUpdateFeature}
      />
    ));
  }
}

export default FeatureOptions;
