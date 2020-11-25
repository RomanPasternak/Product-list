import React from 'react';
import './list.css';

import ListItem from '../list-item/list-item';

const List = ({ listData, onHave, deleteItem, changeStatus }) => {
    const elements = listData.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={ id } className="list-item">
                <ListItem onHave = { () => onHave(id) }
                          deleteItem = { () => deleteItem(id) }
                          changeStatus = { changeStatus }
                          id = {id}    
                          {...itemProps}/>
            </li>
        );
    });

    return (
        <ul className="list">
            { elements }
        </ul>
    );
};

export default List;