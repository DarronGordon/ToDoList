import { useState } from "react";
import { AddListItem } from "./AddListItem";
import  ListItem  from "./ListItem";

import "./StylingComponents/ListStyle.scss";
const d = new Date(2022,5,22);
const dummyListItems=[
    {
        key:'1',
        title:'Wake-Up',
        discription:'Get out of bed!!!',
        dueDate:"05-12-2022"
    },
    {
        key:'2',
        title:'Let dogs out.',
        discription:'Let the dogs into the garden.',
        dueDate:"05-12-2022"
    },
];

function Daily()
{
    
    
    const [listItemsList, SetListItemsList]= useState(dummyListItems);
    
    const saveNewListItemHandler = (enteredListItem ) => {
        const newListData={
        ...enteredListItem,
        key:Math.random().toString()
      };
  
      SetListItemsList((prevList) => {
      return [... prevList, newListData]
      });
    }

    let showAddListFormDrop = false ;  
    const toggleListForm = () =>{
       showAddListFormDrop = showAddListFormDrop ? false : true;
       if(showAddListFormDrop===true)
       {
        document.querySelector("#alif").style.display = "flex";
     
       }
       else if(showAddListFormDrop===false)
       {
        
        document.querySelector("#alif").style.display = "none";
       }

    }

    return(
        <div className="DailyToDoList" >

        <div className="addListItemForm-Container" id="alif">
      
      <AddListItem className='addListForm' onSaveNewListItem={saveNewListItemHandler} ></AddListItem>

        </div>
        <button onClick={toggleListForm}>Create new Task!!!</button>
        <h3>Tasks To DO!</h3>

{listItemsList.map(itemData => <ListItem title={itemData.title} discription={itemData.discription} dueDate={itemData.dueDate} key={itemData.key} /> )}
   
        </div>
    );
}

export default Daily;