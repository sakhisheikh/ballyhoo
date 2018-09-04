import React from "react";

import { Segment } from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/inclusion.css";

export default class Inclusion extends React.Component {
  render() {
    let inclusion = "";
    if (this.props.detailState.apiCall) {
    } else {
      if (this.props.history.location.state.offerData.api_type === 1) {
        if (
          this.props.history.location.state.offerData.data.Inclusion === null ||
          this.props.history.location.state.offerData.data.Inclusion === ""
        ) {
          return <div />;
        } else {
          inclusion = this.props.history.location.state.offerData.data
            .Inclusion;
        }
      } else {
        if (
          Object.keys(this.props.history.location.state.offerData.data.ACTIVITY)
            .length !== 0
        ) {
          inclusion = this.props.history.location.state.offerData.data.ACTIVITY
            .Offer_Synopsis;
        } else if (
          Object.keys(this.props.history.location.state.offerData.data.EVENT)
            .length !== 0
        ) {
          inclusion = this.props.history.location.state.offerData.data.EVENT
            .Offer_Synopsis;
        } else if (
          Object.keys(this.props.history.location.state.offerData.data.GETAWAY)
            .length !== 0
        ) {
          inclusion = this.props.history.location.state.offerData.data.GETAWAY
            .Offer_Synopsis;
        } else if (
          Object.keys(this.props.history.location.state.offerData.data.SALOON)
            .length !== 0
        ) {
          inclusion = this.props.history.location.state.offerData.data.SALOON
            .Offer_Synopsis;
        } else {
          return <div />;
        }
      }
    }

    if (inclusion === "" || inclusion === undefined || inclusion === null) {
      return <div />;
    }

    return (
      <div>
        <div className={classes.HeaderContainer}>
          <h4 className={classes.HeaderName}>INCLUSIONS</h4>
          <div className={classes.UnderScore} />
        </div>
        <Segment>
          <label style={{ color: "rgba(0,0,0,.6)", whiteSpace: "pre-line" }}>
            {inclusion}
          </label>
        </Segment>
      </div>
    );
  }
}
