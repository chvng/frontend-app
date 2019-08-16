import React from 'react';
import { GreenAccordion, EmptyAccordionItem } from './accordion';

const MessageContainer = (component, data, text) => {
    const InputComponent = component;

    const displayEmptyList = (
        <GreenAccordion>
            <EmptyAccordionItem title={text} />
        </GreenAccordion>
    )

    if(!data) return null;
    if(!data.length) {
        return displayEmptyList
    } else {
        return data.map(data =>
            <InputComponent
                key={data.id}
                title={data.title}
                messages={data.messages}
            />
        )
    }
}

export default MessageContainer;