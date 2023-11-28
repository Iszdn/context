import './App.css';
import Home from './components/Home';
import BasketProvider from './Context/BasketContext';

function App() {

  return (
    <>
  <BasketProvider>
    <Home></Home>
  </BasketProvider>
    </>
  );
}

export default App;
