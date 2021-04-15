import FileUpload from 'components/FileUpload';
import ShowcaseProfilePic from 'components/ShowcaseProfilePic';

import { MAX_AGE } from 'constants/index';
import { API_URL } from 'config';
import logo from 'assets/images/logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <img src={logo} alt="React Logo" />
      <p>
        Edit <code>src/App.js</code> and save
        <h1>{API_URL}</h1> to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      Max Age is {MAX_AGE}.<FileUpload></FileUpload>
      <hr></hr>
      <ShowcaseProfilePic></ShowcaseProfilePic>
    </div>
  );
}

export default App;
