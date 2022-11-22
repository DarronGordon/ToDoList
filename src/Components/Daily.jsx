import { useState } from "react";
import { DailyListItem } from "./DailyListItem";
import  ListItem  from "./ListItem";

import "./StylingComponents/ListStyle.scss";
const d = new Date(2022,5,22);

const dummyListItems=[
    {
        id:'1',
        title:'Wake-Up',
        discription:'Get out of bed!!!',
        dueDate:d
    },
    {
        id:'2',
        title:'Let dogs out.',
        discription:'Let the dogs into the garden.'
    },
];

function Daily()
{
    
    const [listItemsList, SetListItemsList]= useState(dummyListItems);

    const saveNewListItemHandler = (enteredListItem ) => {
        const newListData={
        ...enteredListItem,
        id:Math.random().toString()
      };
  
      SetListItemsList((prevList) => {
      return [... prevList, newListData]
      });
    }
    
    return(
        <div className="DailyToDoList">
      
        <DailyListItem onSaveNewListItem={saveNewListItemHandler}></DailyListItem>

        <h3>Tasks To DO!</h3>

{listItemsList.map(itemData => <ListItem title={itemData.title} discription={itemData.discription} dueDate={itemData.dueDate} /> )}
   
        </div>
    );
}

export default Daily;