import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from './Section';

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
    this.closeSection(this.state.openSection);
    this.props.children.forEach(child => {
      if(child.props.title === title) {
        this.expandSection(child);
        this.setState({ openSection:child });
      }
    });
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
        {child === this.state.openSection ? child.props.children : null}
        </Section>
      ))
    );
  }
}

export default SectionList;
