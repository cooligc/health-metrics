import logo from './logo.svg';
import './App.css';
import { Metric } from './components/Metric';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Counter } from './core/Counter';
import { MyCard, MyCart } from './components/MyCard';

function App() {

  const [schema, setSchema] = useState([]);

  useEffect(() => {
     let loadData = async () =>  {
      let _schema = await axios.get('https://calm-red-dog-fez.cyclic.app/health-metrics').then((response) => {
        setSchema(response.data)
      });
      return _schema
    }

    loadData()
  },[])

  return (
    <div className="App">
      <h1> Welcome to health metrics</h1>
      <div>
        <MyCard schema={schema} data={schema} date = '24-03-2023'/>
        <MyCard schema={schema} data={schema} date = '25-03-2023'/>
        <MyCard schema={schema} data={schema} date = '26-03-2023'/>
        <MyCard schema={schema} data={schema} date = '27-03-2023'/>
        <MyCard schema={schema} data={schema} date = '28-03-2023'/>
        <MyCard schema={schema} data={schema} date = '29-03-2023'/>
      </div>
    </div>
  );
}

export default App;
