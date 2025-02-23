import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    function handleMultiSelection(getCurrentId) {
        let cpyMultiple = [...multiple];
        const isAlreadySelected = cpyMultiple.includes(getCurrentId);

        if (!isAlreadySelected) cpyMultiple.push(getCurrentId);
        else cpyMultiple.splice(cpyMultiple.indexOf(getCurrentId), 1);

        setMultiple(cpyMultiple);
    }

    return (
        <div className="wrapper">
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
                Enable Multi Selection
            </button>
            <div className="accordian">
                {data && data.length > 0 ? (
                    data.map((dataItem) => (
                        <div className="item" key={dataItem.id}>
                            <div
                                onClick={() => enableMultiSelection ? handleMultiSelection(dataItem.id) : handleSingleSelection(dataItem.id)}
                                className="title"
                            >
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {enableMultiSelection
                                ? multiple.includes(dataItem.id) && <div className="content">{dataItem.answer}</div>
                                : selected === dataItem.id && <div className="content">{dataItem.answer}</div>
                            }
                        </div>
                    ))
                ) : (
                    <div>No data found!</div>
                )}
            </div>
        </div>
    );
}
