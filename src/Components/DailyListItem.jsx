import { useState } from "react";
import React from "react";
import "./StylingComponents/ListStyle.scss";


export const DailyListItem = (props) => {
    const date = new Date();
    const d = date.setFullYear(date.getFullYear, date.getMonth, date.getDate);
    const[items, setNewListItems] = useState({title:"", discription:"" , dueDate:''});

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

    const newDailyListItemDueDate = (e) =>{
        setNewListItems({
            ...items,
            dueDate:e.target.value,
        })
    }

    const AddListItem =(e)=>{
        e.preventDefault();
        props.onSaveNewListItem(items);
        setNewListItems({title:'',discription:'', dueDate:''});  
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

        <label className="listItem-DueDate">Discription:</label>
        <input value={items.DueDate} type="date"  onChange={newDailyListItemDueDate}></input>

        <button type="submit">Submit</button>
        </form>
        </div>
        )
}