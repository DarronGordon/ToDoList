

export const ListItem = (props) =>{

    console.log(props.title);
    return(
        <div className="ListItem">
        <input type="checkbox" id="ListItem-Done" name="ListItem-Done" />
        <h3>{props.title}</h3>
        <p>{props.discription}</p>
        </div>
    )
}