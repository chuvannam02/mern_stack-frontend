import React, { useState } from "react";
import Typist from "react-typist";
const About = () => {
  const [renderMsg, setRenderMsg] = useState(false);
  const onHeaderTyped = () => {
    setRenderMsg({ renderMsg: true });
  };
  return (
    <div className="about">
      <Typist
        avgTypingDelay={40}
        startDelay={2000}
        onTypingDone={onHeaderTyped}
      >
        <h3 className="text-2xl text-[#f35d5d] font-semibold">
          About My Profile ️🥇
        </h3>
      </Typist>
      <div className="TypistExample-content">
        {renderMsg ? (
          <Typist
            className="TypistExample-message"
            cursor={{ hideWhenDone: true }}
          >
            * I am <span className="underline text-blue-600"> React </span>{" "}
            developer
            <Typist.Delay ms={1250} />
            <br />
            * Web 3 Developer
            <Typist.Delay ms={1250} />
            <br />
            * Freelance developer
            <Typist.Delay ms={500} /> ️💗
            <Typist.Backspace count={5} delay={1000} />
            <Typist.Delay ms={750} />
            r
            <Typist.Delay ms={1250} />
            <br />
            <span>
              <a
                href="https://code.morioh.com/code/56f759d02f67"
                className="font-bold"
              >
                Learn More
              </a>
            </span>
            <br />
          </Typist>
        ) : null}
      </div>
    </div>
  );
};

export default About;
