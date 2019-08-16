import React from 'react';
import { Accordion, AccordionItem } from './accordion/index.js';

function MaintanenceMessage(props) {
    const showMessage = (
        <div className="ffe-accordion-item__operations">
            <div className="ffe-accordion-item__content">{props.messages}</div>
        </div>
    );

    const activeMessage = (
        <Accordion>
            <AccordionItem title={props.title} defaultOpen={true}>
                {showMessage}
            </AccordionItem>
        </Accordion>
    );

    return (
        activeMessage
    )
    
}

export default MaintanenceMessage;
