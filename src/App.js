import React, { Component } from 'react';
import './App.css';
import SectionList from './SectionList';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <SectionList>
          <div title='Moses Berra' isOpen={true} id='main'>
            <p>I like to code</p>
          </div>
          <div title='Avocados' isOpen={false} id='avocados'>
            <p>I like to eat them</p>
          </div>
          <div title='The Website' isOpen={false} id='this'>
            <p>
              I built this site using <a href='https://reactjs.org/'>React</a>.
              This is my first project using the React framework, and I used a&nbsp;
              <a href='https://github.com/gitname/react-gh-pages'>lot</a>&nbsp;
              <a href='https://alligator.io/react/react-accordion-component/'>of</a>&nbsp;
              <a href='https://www.npmjs.com/package/react-collapse'>great</a>&nbsp;
              <a href='https://medium.com/in-the-weeds/learning-react-with-create-react-app-part-2-3ad99f38b48d'>resources</a>.
            </p>
          </div>
          <div title='Contact' isOpen={false} id='contact'>
            <p>@me next time<br/>moses.r.berra@gmail.com</p>
          </div>
        </SectionList>
      </div>
    );
  }
}

export default App;
