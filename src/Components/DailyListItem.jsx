import { useState } from "react";
import React from "react";



export const DailyListItem = (props) => {

    const newListItemTitle = (e) =>{

        console.log(e.target.value);
        SetTitle =e.target.value;
        console.log(listItemTitle);

    }
    const newListItemDiscription = (e) =>{

        console.log(e.target.value);

    }


    return(
        <div className="DailyListItem ListItem">
        
        <form className=" DailyListItemForm">

        <input type="checkbox" id="ListItem-Done" name="ListItem-Done" />

        <label  name="Title">Title:
        <input type="text" placeholder="Whats the Title?" onChange={newListItemTitle}></input>
        </label>

        <label className="listItem-Discription">Discription:</label>
        <input type="text" placeholder="Discribe What Needs to be done!" onChange={newListItemDiscription}></input>


        </form>


        </div>
        
        )
    
}