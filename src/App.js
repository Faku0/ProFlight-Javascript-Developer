
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Challenge from './Component/Challenge/Challenge-ProFlight';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Challenge/>}/>
      </Routes>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
