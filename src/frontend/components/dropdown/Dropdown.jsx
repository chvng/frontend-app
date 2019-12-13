import React, { useMemo, useRef } from 'react';
import classNames from 'classnames';
import Downshift from 'downshift';
import { Scrollbars } from 'react-custom-scrollbars';
import isEqual from 'lodash.isequal';

import { KryssIkon, ChevronIkon } from '@sb1/ffe-icons-react';
import { Paragraph, MicroText} from '@sb1/ffe-core-react';

import { string, arrayOf, shape, number, func, bool, object, oneOfType } from 'prop-types';

function ListItemBody({item, dropdownAttributes, isHighlighted}) {
    const [titleAttribute, ...restAttributes] = dropdownAttributes;
    const title = item[titleAttribute];
    const rest = restAttributes.map(attribute => <MicroText key={attribute}>{item[attribute]}</MicroText>); 

    return (
        <div
            className={classnames('ffe-searchable-dropdown__list-item-body', {
                'ffe-searchable-dropdown__list-item-body--highlighted' : isHighlighted,
            })}
        >
            {title}
            {!!rest.length && (
                <div classaName="ffe-searchable-dropdown__list-item-body-details">
                    {rest}
                </div>
            )}
        </div>
    )
}

function ListItemContainer({getItemProps, item, isHighlighted, dropdownAttributes, children}) {
    const [titleAttribute] = dropdownAttributes;
    const itemProps = getItemProps({
        item: item[titleAttribute],
        key: item[titleAttribute]
    });
    return (
        <div 
            {...itemProps}
            className="ffe-searchable-dropdown__list-item-container"
        >
            {children({item, isHighlighted})}
        </div>
    )
}

function Dropdown({
    id,
    labelId,
    className,
    dropdownList,
    dropdownAttributes,
    searchAttributes,
    maxRenderedDropdownElements = Number.MAX_SAFE_INTEGER,
    initialValue,
    onChange = Function.prototype,
    inputProps = {},
    listElementBody: CustomListItemBody,
    noMatch = {},
    'aria-invalid': ariaInvalid
}) {

    const inputEl = useRef(null);
    const initialSelectedItem = useMemo(() => dropdownList.find(item => isEqual(initialValue, item)), [dropdownList, initialValue]);
    const ListItemBodyElement = CustomListItemBody || ListItemBody;

    const findSelectedItem = (value, dropdownList, dropdownAttributes) => {
        const [searchAttribute] = dropdownAttributes;
        return dropdownList.find(item => item[searchAttribute] === value) || null;
    }
    
    const filterDropdownList = (dropdownList, searchAttributes, inputValue) => {
        const inputValueLowerCase = inputValue.toLowerCase();
        return dropdownList.filter(item => {
            searchAttributes.map(searchAttribute => item[searchAttribute].toLowerCase()).some(itemAttribute => itemAttribute.includes(inputValueLowerCase))
        });
    }
    return (
        <Downshift
            inputId={id}
            labelId={labelId}
            initialSelectedItem={initialSelectedItem ? initialSelectedItem[dropdownAttributes[0]] : null}
            onChange={value => onChange(findSelectedItem(value, dropdownList, dropdownAttributes))}
        >
            {({
                getInputProps,
                getItemProps,
                getMenuProps,
                isOpen,
                inputValue,
                highlightedIndex,
                selectedItem,
                openMenu,
                closeMenu,
                clearSelection
            }) => {
                const dropdownListFiltered = filterDropdownList(dropdownList, searchAttributes, inputValue).slice(0, maxRenderedDropdownElements);

                const listToRender = dropdownListFiltered.length ? dropdownListFiltered : noMatch.dropdownList || [];

                return (
                    <div
                        className={classNames(className, 'ffe-searchable-dropdown')}
                    >
                        <input 
                            ref={inputEl}
                            {...getInputProps({
                                className: 'ffe-input-field',
                                ...inputProps
                            })}
                            aria-invalid={typeof ariaInvalid === 'string' ? ariaInvalid : String(ariaInvalid)}
                            onClick={isOpen ? closeMenu : openMenu}
                        />
                        {selectedItem ? ( 
                            <button
                                type="button"
                                className="ffe-searchable-dropdown__button ffe-searchable-dropdown__button--cross"
                                onClick={clearSelection}
                            >
                                <KryssIkon />
                            </button>
                        ) : (
                            <button
                                type="button"
                                className={classNames(
                                    'ffe-searchable-dropdown__button ffe-searchable-dropdown__button--arrow',
                                    {
                                        'ffe-searchable-dropdown__button--flip': isOpen
                                    }
                                )}
                                onClick={isOpen ? closeMenu : openMenu}
                            >
                                <ChevronIkon />
                            </button>
                        )}
                        <div
                            className={classNames(
                                'ffe-searchable-dropdown__list',
                                {
                                    'ffe-searchable-dropdown__list--open': isOpen
                                }
                            )}
                        >
                            <Scrollbars
                                {...getMenuProps()}
                                autoHeight={true}
                                autoHeightMax={300}
                            >
                                {!dropdownListFiltered.length && noMatch.text && isOpen && (
                                    <div className="ffe-searchable-dropdown__no-match">
                                        <Paragraph>
                                            {noMatch.text}
                                        </Paragraph>
                                    </div>
                                )}
                                {isOpen && listToRender.map((item, index) => {
                                    return (
                                        <ListItemContainer
                                            key={item[dropdownAttributes[0]]}
                                            dropdownAttributes={dropdownAttributes}
                                            getItemProps={getItemProps}
                                            isHighlighted={index === highlightedIndex}
                                            item={item}
                                        >
                                            {props => {
                                                return (
                                                    <ListItemBodyElement
                                                        {...props}
                                                        dropdownAttributes={dropdownAttributes}
                                                    />
                                                )}
                                            }
                                        </ListItemContainer>
                                    )
                                })}
                            </Scrollbars>
                        </div>
                    </div>
                )
            }} 
        </Downshift>
    )
}



Dropdown.propTypes = {
    id: string,

    labelId: string.isRequired,

    className: string,

    dropdownList: arrayOf(object).isRequired,

    dropdownAttributes: arrayOf(string).isRequired,

    searchAttributes: arrayOf(string).isRequired,

    inputProps: shape({ onFocus: func }),

    initialValue: object,

    maxRenderedDropdownElements: number, 

    onChange: func,

    listElementBody: func,

    noMatch: shape({
        text: string.isRequired,
        dropdownList: arrayOf(object)
    }),

    'aria-invalid': oneOfType([string, bool])
}

export default Dropdown;