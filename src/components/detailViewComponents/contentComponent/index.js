import React from "react";
import Truncate from "react-truncate";

import Header from "./headerComponent/header";
import Basic from "./basicComponent/basic.jsx";
import BusinessHour from "./businessHourComponent/business";
import Hashtag from "./hashtagComponent/hashtag";
import Highlight from "./highlightComponent/highlight";
import Inclusion from "./inclusionComponent/inclusion";
import Note from "./noteComponent/note";
export default class Content extends React.Component {
  render() {
    return (
      <div>
        <Header
          history={this.props.history}
          detailState={this.props.detailState}
        />
        <Basic
          history={this.props.history}
          detailState={this.props.detailState}
        />
        <BusinessHour
          history={this.props.history}
          detailState={this.props.detailState}
        />
        <Hashtag
          history={this.props.history}
          detailState={this.props.detailState}
        />
        <Highlight
          history={this.props.history}
          detailState={this.props.detailState}
        />
        <Inclusion
          history={this.props.history}
          detailState={this.props.detailState}
        />
        <Note
          history={this.props.history}
          detailState={this.props.detailState}
        />
      </div>
    );
  }
}
