import React from "react";
import FeatureOptions from "./FeatureOptions";
import FEATURES from "./FeatureStore";

class FeatureList extends React.Component {
  render() {
    return Object.keys(FEATURES).map((feature, idx) => {
      const featureHash = feature + "-" + idx;

      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>

          <FeatureOptions
            features={FEATURES}
            feature={feature}
            state={this.props.state}
            onUpdateFeature={this.props.onUpdateFeature}
          />
        </fieldset>
      );
    });
  }
}

export default FeatureList;
