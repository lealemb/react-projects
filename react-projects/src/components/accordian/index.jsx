// single selection 
// multiple selection
import { useState } from "react";
import "./styles.css";

import data from "./data";
export default function Accordian(){
    const [selected, setSelected] = useState(null);

    return <div className="wrapper"> 
    <div className="accordian">
        {
            data && data.length > 0 ? (
            data.map((dataItem) => (
            <div className="item">
                <div className="title">
                    <h3>{dataItem.question}</h3>
                    <span>+</span>
                </div>
            </div>)
            ))
            
            :<div> No data found ! </div>
        }

        </div>

    </div>
}