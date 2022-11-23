import { useState } from "react";
import { AddListItem } from "./AddListItem";
import ListItem from "./ListItem";

const shoppingListItems=[
    {
        key:'1',
        title:'Name',
        discription:'Discription',
    },
];
export const Shopping = () =>{
    const [shoppingListItemsList, SetListItemsList]= useState(shoppingListItems)
    
    const saveNewListItemHandlers = (enteredListItem ) => {
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
      
      <AddListItem className='addListForm' onSaveNewListItem={saveNewListItemHandlers} ></AddListItem>

        </div>
        <button onClick={toggleListForm}>Create new Task!!!</button>
        <h3>Tasks To DO!</h3>

{shoppingListItemsList.map(itemData => <ListItem title={itemData.title} discription={itemData.discription} key={itemData.key} /> )}
   
        </div>
    );
}
