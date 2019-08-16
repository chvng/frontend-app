import React, { Component } from 'react';
import { node, number, string } from 'prop-types';
import classNames from 'classnames';

class EmptyAccordionItem extends Component {

    render() {
        const {
            ariaLabel,
            className,
            index,
            title,
            uuid,
            id,
        } = this.props;

        return (
            <li
                className={classNames(
                    {
                        'ffe-accordion-item': true,
                    },
                    className,
                )}
            >
                <div
                    tabIndex={0}
                    aria-controls={`panel-${uuid}-${index}`}
                    aria-label={ariaLabel}
                    className="ffe-empty-accordion-item__toggler"
                    id={id ? id : `tab-${uuid}-${index}`}
                    role="tab"
                >
                    <span className="ffe-accordion-item__toggler-content">
                        <i className="ffe-accordion-item__symbol" />
                        <span className="ffe-accordion-item__title">
                            {title}
                        </span>
                    </span>
                </div>
            </li>
        );
    }
}

EmptyAccordionItem.propTypes = {
    /** A label for the accordion item */
    ariaLabel: string,
    /** Extra class names */
    className: string,
    /** The index of the accordion item in the current accordion */
    index: number,
    /** The title */
    title: node,
    /** A unique ID, usually provided by the wrapping <Accordion /> element */
    uuid: string,
    /** An optional ID for the element, will be auto-generated if not provided */
    id: string,
};

export default EmptyAccordionItem;