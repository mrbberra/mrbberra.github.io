import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Section from './Section';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Section title='Moses Berra' isOpen={true} id='main'>
          <p>I like to code</p>
        </Section>
        <Section title='Avocados' isOpen={false} id='avocados'>
          <p>I like to eat them</p>
        </Section>
        <Section title='The Website' isOpen={false} id='this'>
          <p>I made it</p>
        </Section>
        <Section title='Contact' isOpen={false} id='contact'>
          <p>@ me next time</p>
        </Section>
      </div>
    );
  }
}

export default App;
