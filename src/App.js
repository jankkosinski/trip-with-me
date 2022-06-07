import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignModalProvider from './context/providers/SignModalProvider';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <SignModalProvider>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </SignModalProvider>
    </Router>
  );
}

export default App;
