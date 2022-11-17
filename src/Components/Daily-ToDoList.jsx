import { useState } from "react";
import { DailyListItem } from "./DailyListItem";
import { CreateListItems } from "./CreateListItems";

export const DailyToDoList = (props) =>
{
   let listItems=[{}];
    const [listItemData, setListItemDetails] = useState({title:"", discription:"", id:""});
    const saveNewListItemHandler = (enteredListItem) =>{
        setListItemDetails({
        ...enteredListItem,
        id:Math.random().toString()
      });
      listItems.push(...listItemData) 
      console.log(listItems);
    };

    return(
        <div className="DailyToDoList">
      
        
        <DailyListItem onSaveNewListItem={saveNewListItemHandler}></DailyListItem>

        <h3>Tasks To DO!</h3>

        <div className="List">

        <CreateListItems listItems={listItems}/>

        </div>

       
        </div>
    )
}