import React, { Component } from 'react';
import Item from './Item.js';

function listMapper(item, index) {
    console.log(item, index);
    return <Item text={item.text}></Item>;
}

export default function List(props) {
    return (
        <div className='row mb-2'>
            {props.todos.map(listMapper)}
        </div>
    );
}