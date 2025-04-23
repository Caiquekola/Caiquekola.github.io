import React from "react";
import { Typewriter } from "react-simple-typewriter";

function Type() {
  return (
    <h1>
      <span>
        <Typewriter
          words={[
            "Software Developer",
            "Freelancer",
            "Data Analyst",
            "Backend Developer",
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
    </h1>
  );
}

export default Type;
