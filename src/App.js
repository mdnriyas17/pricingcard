import './App.css';
import React,{useState} from 'react';
import Pricing from './pages/pricing';


function App() {
 const [page]=useState("Pricing")
  return (
    <div className="App">
{page==='Pricing'&& <Pricing/>} 
 
    </div>
  );
}
export default App;