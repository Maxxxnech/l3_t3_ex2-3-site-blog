
import './App.css';
import Main from './components/Main';
import data from "./data/articles.json";
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
        <Header text="header text"/>
        <Main articles={data} />
        <Footer text="footer text"/>
    </div>
  );
}

export default App;
