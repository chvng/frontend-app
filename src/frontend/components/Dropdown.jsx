import React from 'react';

function findSelectedItem(value, dropdownList, dropdownAttributes) {
    const [searchAttribute] = dropdownAttributes;
    return dropdownList.find(item => item[searchAttribute] === value) || null;
}

function Dropdown() {

    return (
        <div>The start of something new</div>
    )
}

export default Dropdown;