import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from './Section';
import {Collapse} from 'react-collapse';

class SectionList extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
  }

  constructor(props) {
    super(props);

    this.props.children.forEach(child => {
      if (child.props.isOpen) {
        this.state = {openSection: child};
      }
    });
    console.log(this.state.openSection)
  }

  closeSection = section => {
    console.log('closing ' + section.props.title)
  }

  expandSection = section => {
    console.log('opening ' + section.props.title)
  }

  toggle = title => {
    if (this.state.openSection === null) { // no sections are currently open, just open this one
      this.props.children.forEach(child => {
        if(child.props.title === title) {
          this.expandSection(child);
          this.setState({ openSection:child });
        }
      });
    }
    else if (title === this.state.openSection.props.title) { // closing the open section only
      this.closeSection(this.state.openSection);
      this.setState({ openSection:null });
    }
    else { // opening a new section and closing the old one
      this.closeSection(this.state.openSection);
      this.props.children.forEach(child => {
        if(child.props.title === title) {
          this.expandSection(child);
          this.setState({ openSection:child });
        }
      });
    }
  }

  render() {
    return (
      this.props.children.map(child => (
        <Section
          isOpen={child === this.state.openSection ? true : false}
          title={child.props.title}
          onClick={this.toggle}
          id={child.props.id}
        >
          <Collapse isOpened={child === this.state.openSection ? true : false}>
            { child.props.children }
          </Collapse>
        </Section>
      ))
    );
  }
}

export default SectionList;
