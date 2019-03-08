import React from "react";

const Image = props => {
  return (
    <div>
      <img src={props.source} style={props.style} />
    </div>
  );
};

export default Image;
