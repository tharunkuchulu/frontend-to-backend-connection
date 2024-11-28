import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-layout">
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;