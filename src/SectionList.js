import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from './Section';

class SectionList extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
  }
  
  constructor(props) {
      super(props);

      const openSection = ;
    }
  render() {
    return (
      <div className="SectionList">
        <Section name="Jim"/>
        <HelloWorld name="Sally"/>
      </div>
    );
  }
}

export default Section;
