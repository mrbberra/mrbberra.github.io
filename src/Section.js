import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Section.css';

class Section extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    title: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { isOpen: this.props.isOpen };
  }

  // toggleOpen() {
  //   console.log('toggling')
  //   this.setState(prevState => ({
  //     isOpen: !prevState.isOpen
  //   }));
  // }

  render() {
    return (
      <div className='Section' id={this.props.id}>
        <h1 onClick={() => this.props.onClick(this.props.title)}>{ this.props.title }</h1>
        { this.props.children }
      </div>
    );
  }
}

export default Section;
