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
      <p>
        props: <br />
        The Data is passed from one component to another. It is Immutable
        (cannot be modified). Props can be used with state and functional
        components. Props are read-only.
        <br />
        state: <br />
        The Data is passed within the component only. It is Mutable ( can be
        modified). State can be used only with the state components/class
        component (Before 16.0). State is both read and write.
      </p>
      <h3>Uses of use effect other than data load</h3>
      <p>
        The useEffect function is like the swiss army knife of hooks. It can be
        used for a ton of things, from setting up subscriptions to creating and
        cleaning up timers to changing the value of a ref. One thing it's not
        good for is making DOM changes that are visible to the user. The way the
        timing works, an effect function will only fire after the browser is
        done with layout and paint too late, if you wanted to make a visual
        change. For those cases, React provides the useMutationEffect and
        useLayoutEffect hooks, which work the same as useEffect aside from when
        they are fired. Have a look at the docs for useEffect and particularly
        the section on the timing of effects if you have a need to make visible
        DOM changes. This might seem like an extra complication. Another thing
        to worry about. It kinda is, unfortunately. The positive side effect of
        this (heh) is that since useEffect runs after layout and paint, a slow
        effect won't make the UI janky. The down side is that if you're moving
        old code from lifecycles to hooks, you have to be a bit careful, since
        it means useEffect is almost-but-not-quite equivalent to
        componentDidUpdate in regards to timing.
      </p>
    </div>
  );
};

export default Question;
