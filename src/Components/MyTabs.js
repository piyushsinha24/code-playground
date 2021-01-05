import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";
import "./MyTabs.css";

class MyTabs extends Component {
  render() {
    return (
      <Tabs
        transition={false}
        defaultActiveKey="html"
        id="uncontrolled-tab-example"
      >
        <Tab eventKey="html" title="HTML">
          <textarea id="htmlTextarea"></textarea>
        </Tab>
        <Tab eventKey="css" title="CSS">
          <textarea id="cssTextarea"></textarea>
        </Tab>
        <Tab eventKey="js" title="JS">
          <textarea id="jsTextarea"></textarea>
        </Tab>
      </Tabs>
    );
  }
}

export default MyTabs;
