import React from "react";

import { Segment } from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/highlight.css";

export default class Highlight extends React.Component {
  render() {
    let highlight = "";
    if (this.props.detailState.apiCall) {
    } else {
      if (this.props.history.location.state.offerData.api_type === 1) {
        highlight =
          this.props.history.location.state.offerData.data.Description +
          "\n\n" +
          this.props.history.location.state.offerData.data.MERCHANT.Description;
      } else {
        if (
          Object.keys(this.props.history.location.state.offerData.data.ACTIVITY)
            .length !== 0
        ) {
          highlight = this.props.history.location.state.offerData.data.ACTIVITY
            .Offer_Description;
        } else if (
          Object.keys(this.props.history.location.state.offerData.data.EVENT)
            .length !== 0
        ) {
          highlight = this.props.history.location.state.offerData.data.EVENT
            .Offer_Description;
        } else if (
          Object.keys(this.props.history.location.state.offerData.data.GETAWAY)
            .length !== 0
        ) {
          highlight = this.props.history.location.state.offerData.data.GETAWAY
            .Offer_Description;
        } else if (
          Object.keys(this.props.history.location.state.offerData.data.SALOON)
            .length !== 0
        ) {
          highlight = this.props.history.location.state.offerData.data.SALOON
            .Offer_Description;
        } else {
          return <div />;
        }
      }
    }

    if (highlight === "" || highlight === undefined || highlight === null) {
      return <div />;
    }

    return (
      <div>
        <div className={classes.HeaderContainer}>
          <h4 className={classes.HeaderName}>HIGHLIGHTS</h4>
          <div className={classes.UnderScore} />
        </div>
        <Segment>
          <label style={{ color: "rgba(0,0,0,.6)", whiteSpace: "pre-line" }}>
            {highlight}
          </label>
        </Segment>
      </div>
    );
  }
}
