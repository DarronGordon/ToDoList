
import { useState } from 'react';
import './App.css';
import  Daily from './Components/Daily';
import { Work } from './Components/Work';
import { Shopping } from './Components/Shopping';
import { ListFilter } from './Components/ListFilter';

function App() {
const[list, SetList]=useState('Daily');
  const ListChangeHandler = (e) => {
    SetList(e);
  }
  ShowList();
  function ShowList(){
    if ( list === 'Daily')
    {
      return(<Daily/>);
    }  
    else if ( list === 'Work')
    {
      return(<Work/>);
    }
    else if ( list === 'Shopping')
    {
      return(<Shopping/>);
    }
  }
  return (
    <div className="App">

    <h1 className='AppHeader'>Tasks</h1>

    <ListFilter onListChange={ListChangeHandler} />

     {ShowList()}

    </div>
  );
}

export default App;
