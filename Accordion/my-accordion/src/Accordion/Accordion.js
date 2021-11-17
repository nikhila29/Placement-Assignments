import React, { useEffect } from 'react';
import './Accordion.css';
import { useState } from 'react';



const Accordion = (props) => {

    const [isTrue,setIsTrue] = useState(false);

    useEffect(() => {
        setIsTrue(props.isTrue)
    },[props.isTrue])

    const handleShowHide = () => {
        setIsTrue(!isTrue)
    }

    return <div>
    <div className="title" onClick = {() => {handleShowHide()}}>
        
        <div>{props.title}</div>
        <div>{isTrue ? '-': '+'}</div>
    </div>

    {isTrue &&<div className="description">{props.description}</div>}
    </div>
    
}

export default Accordion
