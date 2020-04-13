import React ,{useState}from 'react'
import actualDate from '../utils/todayDate';

function AddEvent(){


    const [date, setDate] = useState(actualDate);
    const [event, setEvent]=useState("");

    const onSubmit= e =>{
        e.preventDefault();
        console.log(date);
        console.log(event)
    }
    return(
    <div>
        <div className="fixed-action-btn">
         <a href="#login" className="btn-floating btn-large red modal-trigger">
          <i className="large material-icons">add_circle_outline</i>
        </a>
    </div>

<div id="login" className="modal ">
  <h5 className="modal-close">&#10005;</h5>
  <div className="modal-content center">
    <h4>Add new Event</h4>
    <br />

    <form action="#" onSubmit={onSubmit}>

      <div className="input-field">
        <i className="material-icons prefix">event</i>
        <input type="date" id="date" defaultValue={actualDate()}
        onChange={(e)=>{setDate(e.target.value)}}/>
        <label htmlFor="date">Date:
        </label>
      </div>
      <br/>

      <div className="input-field">
        <i className="material-icons prefix">short_text</i>
        <input type="text" id="pass"
        onChange={(e)=>{setEvent(e.target.value)}}/>
        <label htmlFor="pass">Action</label>
      </div>

      <br/>
      
      <input type="submit" value="Create" className="btn btn-large"/>
      
    </form>
  </div>
</div>
</div>
    )
}
export default AddEvent;
