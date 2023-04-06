import React from "react";

const NoImageFound = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="300px"
      width="300px"
      version="1.1"
      viewBox="-300 -300 600 600"
      font-family="Bitstream Vera Sans,Liberation Sans, Arial, sans-serif"
      font-size="72"
      text-anchor="middle"
    >
      <circle stroke="#AAA" stroke-width="10" r="280" fill="#FFF" />
      <switch style="fill:#444;">
        <text id="trsvg3-en" systemLanguage="en">
          <tspan x="0" y="-8" id="trsvg1-en">
            NO IMAGE
          </tspan>
          <tspan x="0" y="80" id="trsvg2-en">
            AVAILABLE
          </tspan>
        </text>
        <text id="trsvg3">
          <tspan x="0" y="-8" id="trsvg1">
            NO IMAGE
          </tspan>
          <tspan x="0" y="80" id="trsvg2">
            AVAILABLE
          </tspan>
        </text>
      </switch>
    </svg>
  );
};

export default NoImageFound;
