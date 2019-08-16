import React, { useState } from 'react';
import { Accordion, BlueAccordion, GreenAccordion ,AccordionItem } from './accordion/index.js';


function OperationalMessage(props) {
    const [isClicked, setClicked] = useState(false)
    const [isSolved, setSolved] = useState(false)

    const handleClick = () => {
        setClicked(!isClicked);
    };

    // Thinking about this later. 
    // commit: 8098fcac3cd
    // const dateTimeNow = new Date()
    // const lastMessage = props.messages[props.messages.length - 1]
    // const lastMessageDateObject = new Date(lastMessage.time)
    // const lastMessageDateTimeString =   lastMessageDateObject.getDate().toString().concat("/", 
    //                                     (lastMessageDateObject.getMonth() + 1).toString(), 
    //                                     " ", 
    //                                     lastMessageDateObject.getHours().toString(),
    //                                     ":",
    //                                     lastMessageDateObject.getMinutes().toString())
    // const timeToShowSolvedMessage = 30 * 1000 //300 * 1000 = 300s = 5 min


    const showPreviewMessage = (
        <div className="ffe-accordion-item__operations">
            <div className="ffe-accordion-item__time">{props.messages[props.messages.length - 1].time}</div>
            <div className="ffe-accordion-item__content">{props.messages[props.messages.length - 1].text}</div>
        </div>
    );

    const showFullMessage = props.messages.map((message, index) => (
        <div className="ffe-accordion-item__operations" key={index}>
            <div className="ffe-accordion-item__time">{message.time}</div> 
            <div className="ffe-accordion-item__content">{message.text}</div>
        </div>
    )).reverse();

    const activeOpsMsg = (
        <BlueAccordion>
            <AccordionItem title={props.title} defaultOpen={true} onToggleOpen={handleClick}>
                {!isClicked ? showPreviewMessage : showFullMessage}
            </AccordionItem>
        </BlueAccordion>
    );

    const solvedOpsMsg = (
        <GreenAccordion>
            <AccordionItem title={props.title} defaultOpen={true} onToggleOpen={handleClick}>
                {!isClicked ? showPreviewMessage : showFullMessage}
            </AccordionItem>
        </GreenAccordion>
    );

    const operations = () => {
        if (!isSolved) return activeOpsMsg;
        return solvedOpsMsg;
    };

    return (
        operations()
    )
}

export default OperationalMessage;