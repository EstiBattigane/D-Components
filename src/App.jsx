import Navbar from './components/Navbar/navbar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css'


const App = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer Fitems={'Bienvenidos a D-Components'}/>
    </div>
  );
};

export default App;
