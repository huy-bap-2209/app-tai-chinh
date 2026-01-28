import React from "react";
import "./Feature.css";

import FeatureData from "./Data";

function Feature() {
  return (
    <div>
      <div className="feature">
        {FeatureData.map((feature) => (
          <div key={feature.id} className="feature-items">
            <div className="feature-items-icons">
              <img src={feature.image} alt="" />
            </div>
            <h3>{feature.title}</h3>
            <span className="feature-items-line"></span>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feature;
