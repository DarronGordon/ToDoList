

import "./StylingComponents/listItemStyles.scss";


function ListItem (props){
if(props.dueDate===undefined)
{
    return(
        <div className="listItem-container">
        <div className="listItem listItem-title">
        <h5>{props.title}</h5>
        </div>
        <div className="listItem listItem-discription">
        <p>{props.discription}</p>
        </div>
        <div className="listItem listItem-checkbox">
        <input type="checkbox" id="ListItem-Done" name="ListItem-Done" />
        </div> 
        </div>
    )
}
    return(
        <div className="listItem-container">
        <div className="listItem listItem-checkbox">
        <input type="checkbox" id="ListItem-Done" name="ListItem-Done" />
        </div> 
        <div className="listItem listItem-dueDate">
        <h5>{props.dueDate}</h5>
        </div>
        <div className="listItem listItem-title">
        <h5>{props.title}</h5>
        </div>
        <div className="listItem listItem-discription">
        <p>{props.discription}</p>
        </div>
        </div>
    )
}

export default ListItem;