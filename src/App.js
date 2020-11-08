import './App.css';
import Row from './Row';
import requests from './requests';

// TBDb API Key : 1fd53e386944e3f69145a25aab0e1e89
// https://netflixclone-83782.web.app/

function App() {
  return (
    <div className="App">
      <h1>Femin Dharamshi</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
