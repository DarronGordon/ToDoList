import { useState } from "react";
import React from "react";
import { ListItem } from "./ListItem";


export const DailyListItem = (props) => {

    const[items, setNewListItems] = useState({title:"", discription:""});

    const newDailyListItemDisc = (e) =>{
        setNewListItems({
            ...items,
            discription:e.target.value,
        })
    }

    const newDailyListItemTit = (e) =>{
        setNewListItems({
            ...items,
            title:e.target.value,
        })
    }

    const AddListItem =(e)=>{
        e.preventDefault();
        props.onSaveNewListItem(items);
        setNewListItems({title:'',discription:''});
        // console.log(items);
        // console.log(listItemsInList);
        
        
    }


    return(
        <div className="CreateNew-DailyListItem">
        
        <form onSubmit={AddListItem} className=" CreateNew-DailyListItemForm">
        <h3>Create a new Task for the day?</h3>

        <label  name="Title">Title:
        <input value={items.title} type="text" placeholder="Whats the Title?" onChange={newDailyListItemTit}></input>
        </label>

        <label className="listItem-Discription">Discription:</label>
        <input value={items.discription} type="text" placeholder="Discribe What Needs to be done!" onChange={newDailyListItemDisc}></input>

        <button type="submit">Submit</button>
        </form>
        </div>
        )
}