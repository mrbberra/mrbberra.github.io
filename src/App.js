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
            <p>
              The <a href='https://avocado-prices.herokuapp.com'>Hyde Park Avocado Price Index</a>&nbsp;
              is a REST API and graph interface for the <a href='https://twitter.com/hpavocadoprice'>@hpavocadoprice</a>&nbsp;
              Twitter account (no affiliation on my part with either Twitter or the account, although I did ask
              the account owner for permission). The backend of site was built using <a href='https://www.seleniumhq.org/'>Selenium</a>&nbsp;
              to scrape the Twitter data, <a href='https://www.python.org/'>Python</a> to parse it,
              <a href='https://www.postgresql.org/'>PostgreSQL</a> to save it, and <a href='http://flask.pocoo.org/'>Flask</a> to
              serve it. The front end uses JavaScript&#39;s <a href='https://d3js.org/'>D3</a> library to create an interactive visualization.
            </p>
            <p>
              The main site displays an interactive graph showing the price of an avocado at various locations in Hyde Park,
              Chicago, as reported by the <a href='https://twitter.com/hpavocadoprice'>@hpavocadoprice</a> Twitter feed.
              I used tooltips and onClick events to make it easier for the user to understand and extract information from the graph.
            </p>
            <p>
              The API is accessible at <a href='https://avocado-prices.herokuapp.com'>avocado-prices.herokuapp.com/data</a>,
              which returns a JSON list of every tweet made by the account, represented as a dictionary
              object including the tweet&#39;s unique Twitter ID, the price, and the timestamp. The ID can be used to query
              more information about a specific tweet, such as the timestamp&#39;s string representation and the tweet&#39;s
              embed link, at the /data/&lt;tweet_id&gt; endpoint.
            </p>
            <p>
               The last part of the Avocado site is the admin interface. Through this, the admin user (that&#39;s me!) can view tweets
               and edit their assigned prices. I used JavaScript to make the list of tweets shown filterable, increasing usability.
            </p>
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
            <p>
              The source code can be found <a href='https://github.com/mrbberra/website'>here</a>.
            </p>
            <p>
              I learned a lot from this site, as it was my first experience working with
              React and npm. It underscored the importance of an incremental approach:
              first I worked on getting the code to show all of the Section contents, then I
              added state to each Section to determine whether the Section was open, then I
              added the open/close functionality to each Section. The next part was the hardest,
              because I had to understand how to, in React terms, 'lift the state up' to a parent
              Component so that only one section could be open at once. Finally, I was able to add animations.
            </p>
            <p>
              Again, as this is my first React project, it will always be somewhat of a work in progress. Any feedback is appreciated!
            </p>
          </div>
          <div title='Find Me' isOpen={false} id='contact'>
            <a id='icon-link' href='https://www.linkedin.com/in/mrbberra/'><i class='fab fa-linkedin' aria-hidden='true'></i></a>
            <a id='icon-link' href='https://github.com/mrbberra'><i class='fab fa-github' aria-hidden='true'></i></a>
          </div>
        </SectionList>
      </div>
    );
  }
}

export default App;
