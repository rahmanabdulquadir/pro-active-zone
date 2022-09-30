import React from "react";
import "./Questions.css";
const Questions = () => {
  return (
    <div className="question-container">
      <div className="q-one">
        <h1>How does React JS works?</h1>
        <p>
          ReactJS divides the UI into isolated reusable pieces of code known as
          components. React components work similarly to JavaScript functions as
          they accept arbitrary inputs called properties or props. It's possible
          to have as many components as necessary without cluttering your code.
        </p>
      </div>
      <div className="q-two">
        <h1>Differences between Props and States</h1>
        <p>
          State:The state is an updatable structure that is used to contain data
          or information about the component and can change over time. The
          change in state can happen as a response to user action or system
          event. It is the heart of the react component which determines the
          behavior of the component and how it will render Props: Props are
          read-only components. It is an object which stores the value of
          attributes of a tag and work similar to the HTML attributes. It allows
          passing data from one component to other components.
        </p>
      </div>
      <div className="q-three">
        <h1>The Usages of useEffect without fetching data </h1>
        <p>
          The motivation behind the introduction of useEffect Hook is to
          eliminate the side-effects of using class-based components. For
          example, tasks like updating the DOM, setting up subscriptions or
          timers, etc can be lead to unwarranted side-effects. Since the render
          method is to quick to produce a side-effect one needs to use life
          cycle methods to observe the side effects.{" "}
        </p>
      </div>
    </div>
  );
};

export default Questions;
