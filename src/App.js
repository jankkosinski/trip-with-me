import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavToggleButton from './components/NavToggleButton';
import DestinationsProvider from './context/providers/DestinationsProvider';
import NavProvider from './context/providers/NavProvider';
import SignModalProvider from './context/providers/SignModalProvider';
import Navigation from './layout/Navigation';
import About from './pages/About';
import Details from './pages/Details';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <SignModalProvider>
        <NavProvider>
          <DestinationsProvider>
            <NavToggleButton></NavToggleButton>
            <Navigation></Navigation>
            <Routes>
              <Route path='/' element={<Home></Home>}></Route>
              <Route path='/about' element={<About></About>}></Route>
              <Route path='/details/:id' element={<Details></Details>}></Route>
              <Route path='*' element={<NotFound></NotFound>}></Route>
            </Routes>
          </DestinationsProvider>
        </NavProvider>
      </SignModalProvider>
    </Router>
  );
}

export default App;
