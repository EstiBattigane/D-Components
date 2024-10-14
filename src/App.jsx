import Navbar from './components/Navbar/navbar.jsx';
import Main from './components/main.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css'
import { BrowserRouter } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Main />
        <ItemListContainer />
      </div>
    </BrowserRouter>
  );
};

export default App;
