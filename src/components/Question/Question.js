import React from "react";
import "./Question.css";
const Question = () => {
  return (
    <div>
      <h3>How does react work?</h3>
      <p>
        ReactJS is one of the most popular JavaScript libraries for mobile and
        web application development. Created by Facebook, React contains a
        collection of reusable JavaScript code snippets used for user interface
        (UI) building called components. <br />
        Virtual DOM The Document Object Model (DOM) presents a web page in a
        data tree structure. ReactJS stores Virtual DOM trees in the memory. By
        doing so, React can apply updates to specific parts of the data tree,
        which is faster than re-rendering the entirety of the DOM tree.
        <br />
        Components and Props ReactJS divides the UI into isolated reusable
        pieces of code known as components. React components work similarly to
        JavaScript functions as they accept arbitrary inputs called properties
        or props.
      </p>
      <h3>Difference between props & state</h3>
      <h3>Uses of use effect other than data load</h3>
    </div>
  );
};

export default Question;
