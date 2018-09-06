import React from "react";

import { Segment } from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/term.css";

export default class Term extends React.Component {
  render() {
    let term = "";
    if (this.props.detailState.apiCall) {
    } else {
      if (this.props.history.location.state.offerData.api_type === 1) {
        return <div />;
      } else {
        if (
          Object.keys(this.props.history.location.state.offerData.data.ACTIVITY)
            .length !== 0
        ) {
          term = this.props.history.location.state.offerData.data.ACTIVITY
            .Offer_Terms;
        } else if (
          Object.keys(this.props.history.location.state.offerData.data.EVENT)
            .length !== 0
        ) {
          term = this.props.history.location.state.offerData.data.EVENT
            .Offer_Terms;
        } else if (
          Object.keys(this.props.history.location.state.offerData.data.GETAWAY)
            .length !== 0
        ) {
          term = this.props.history.location.state.offerData.data.GETAWAY
            .Offer_Terms;
        } else if (
          Object.keys(this.props.history.location.state.offerData.data.SALOON)
            .length !== 0
        ) {
          term = this.props.history.location.state.offerData.data.SALOON
            .Offer_Terms;
        } else {
          return <div />;
        }
      }
    }

    if (term === "" || term === undefined || term === null) {
      return <div />;
    }

    return (
      <div>
        <div className={classes.HeaderContainer}>
          <h4 className={classes.HeaderName}>TERMS</h4>
          <div className={classes.UnderScore} />
        </div>
        <Segment>
          <label style={{ color: "rgba(0,0,0,.6)", whiteSpace: "pre-line" }}>
            {term}
          </label>
        </Segment>
      </div>
    );
  }
}