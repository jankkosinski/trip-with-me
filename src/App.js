import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavToggleButton from './components/NavToggleButton';
import NavProvider from './context/providers/NavProvider';
import SignModalProvider from './context/providers/SignModalProvider';
import Navigation from './layout/Navigation';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <SignModalProvider>
        <NavProvider>
          <NavToggleButton></NavToggleButton>
          <Navigation></Navigation>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
          </Routes>
        </NavProvider>
      </SignModalProvider>
    </Router>
  );
}

export default App;
