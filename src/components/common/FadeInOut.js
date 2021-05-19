import React from "react";
import delayUnmounting from "./delayUnmounting";

import styles from "./FadeInOut.module.scss";
function Box(props) {
  console.log(props);
  return (
    <div className={props.styleClass}>
      <div
        className={` ${props.isMounted ? styles.base : styles.baseFade}`}
        style={{
          transformOrigin: props.transformOrigin
            ? props.transformOrigin
            : "center bottom",
        }}
      >
        {props.children}
      </div>
    </div>
  );
}
const DelayedComponent = delayUnmounting(Box);

export default class FadeInOut extends React.Component {
  render() {
    return (
      <DelayedComponent
        styleClass={this.props.styleClass}
        delayTime={this.props.delay}
        isMounted={this.props.isMounted}
        timingFunction={this.props.timingFunction}
        transformOrigin={this.props.transformOrigin}
      >
        {this.props.children}
      </DelayedComponent>
    );
  }
}
