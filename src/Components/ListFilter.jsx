import { useState } from "react"


export const ListFilter = (props) => {
const[list, SetDisplayList] = useState('Daily')
function SetList(e){
SetDisplayList(e.target.value);
}
props.onListChange(list);
return(
    <div className="listFilter-container">

<div className='listFilter-control'>
        <label>Filter by List: </label>
        <select onChange={SetList}>
          <option value='Daily'>Daily</option>
          <option value='Work'>Work</option>
          <option value='Shopping'>Shopping</option>
        </select>
      </div>

</div>
)

}