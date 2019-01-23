import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Section.css';

class Section extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    title: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    isMainHeder: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    //toggleOpen: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { isOpen: this.props.isOpen };
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    console.log('toggling')
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    let contents;
    this.state.isOpen ? contents = this.props.children : contents = null;
    return (
      <div className='Section' id={this.props.id}>
        <h1><a onClick={this.toggleOpen}>{ this.props.title }</a></h1>
        { contents }
      </div>
    );
  }
}

export default Section;
