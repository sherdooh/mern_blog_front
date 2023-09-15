import './App.css';
import HomePage from './pages/Home/HomePage';

function App() {
  return (
    <div className="App font-opensans">

    <Router>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route index path='/about' element={<About />} />
        </Routes>
    </Router>

    

    </div>
  );
}

export default App;
