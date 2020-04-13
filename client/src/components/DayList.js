import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

import Day from './Day';

function DayList(){
    const {days} = useContext(GlobalContext);
    const date= new Date();
    console.log(date.toLocaleDateString())
    return(
        <div>
            <ul className="collapsible">
                {
                    days.map((x)=>{
                       return <li key={x.day}>
                           <div className="collapsible-header">{x.day}</div>
                           <div className="collapsible-body"><Day ereignisse={x.ereigniss}/></div>
                       </li>

                    })
                }
            </ul>
        </div>
    )
}
export default DayList;