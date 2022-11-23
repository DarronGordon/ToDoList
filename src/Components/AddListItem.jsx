import { useState } from "react";
import React from "react";
import "./StylingComponents/ListStyle.scss";


export const AddListItem = (props) => {
    const date = new Date();
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
        const value = e.target.value;
        const splitValue = value.split('-');
        const da = splitValue[2];
        const month = splitValue[1];
        const year = splitValue[0];
        const newDate = da + '-' + month + '-' + year;

        setNewListItems({
            ...items,
            dueDate:newDate,
        })
    }

    const AddListItem =(e)=>{
        e.preventDefault();
        props.onSaveNewListItem(items);
        setNewListItems({title:'',discription:'', dueDate:''});  
    }


    return(
        <div className="CreateNew-DailyListItem " >
        
        <form onSubmit={AddListItem} className=" CreateNew-DailyListItemForm">
        <h3>Create a new Task for the day?</h3>

        <label  name="Title">Title:
        <input value={items.title} type="text" placeholder="Whats the Title?" onChange={newDailyListItemTit}></input>
        </label>

        <label className="listItem-Discription">Discription:</label>
        <input value={items.discription} type="text" placeholder="Discribe What Needs to be done!" onChange={newDailyListItemDisc}></input>

        <label className="listItem-DueDate">Due Date:</label>
        <input value={items.DueDate} type="date"  onChange={newDailyListItemDueDate}></input>

        <button type="submit">Submit</button>
        </form>
        </div>
        )
}