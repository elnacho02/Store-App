import React, {useState, useEffect} from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';

function App() {

  var [productos, setProductos] = useState([]);
  useEffect(() => {
    fetch("http://192.168.1.8:3001/products")
    .then(x => x.json())
    .then(data => setProductos(data))
  }, [])

  return (
    <div className="App">
     <Sidebar/>
    </div>
  );
}

export default App;
