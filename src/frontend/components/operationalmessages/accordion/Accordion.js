import React, { Component } from 'react';
import { node, bool, string } from 'prop-types';
import uuid from 'uuid';
import classNames from 'classnames';

class Accordion extends Component {
    constructor() {
        super();

        this.id = uuid.v4();
    }

    render() {
        const { children, isBlue, isGreen, className, ...rest } = this.props;

        return (
            <ul
                {...rest}
                aria-multiselectable="true"
                className={classNames(
                    {
                        'ffe-accordion': true,
                        'ffe-accordion--blue': isBlue,
                        'ffe-accordion--green': isGreen,
                    },
                    className,
                )}
                role="tablist"
            >
                {React.Children.map(children, ele =>
                    React.cloneElement(ele, { uuid: this.id }),
                )}
            </ul>
        );
    }
}

Accordion.propTypes = {
    /** Accordion items */
    children: node.isRequired,
    /**
     * Use blue Accordion theme - defaults to white . Used internally only.
     * @ignore
     **/
    isBlue: bool,

    /**
     * Use green Accordion theme - defaults to white . Used internally only.
     * @ignore
     **/
    isGreen: bool,

    /** Extra class names */
    className: string,
};

Accordion.defaultProps = {
    isBlue: false,
    isGreen: false,
};

export default Accordion;