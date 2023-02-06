import { Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from "./components/Home.jsx";
import Store from "./components/Store.jsx";
import Branches from './components/Branches.jsx';
import Franchises from "./components/Franchises.jsx";
import Cart from "./components/Cart.jsx";
import './App.scss';

const App = () => (
  <div className='App'>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/branches" element={<Branches />} />
      <Route path="/franchises" element={<Franchises />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </div>
)


export default App;
