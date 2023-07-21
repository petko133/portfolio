import './App.css';
import Footer from './components/UI/Footer';
import Navbar from './components/UI/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
