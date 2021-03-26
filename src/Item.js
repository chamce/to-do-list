import React, { Component } from 'react';

export default function Item(props) {
    return (
        <>
            <div className="input-group mt-1 mb-1">
                <span className="input-group-text" onClick={() => props.checkmark(props.item.time)}>{props.item.status ? '☐' : '☒'}</span>
                <input type="text" className="form-control" aria-label="Text input with checkbox" value={props.item.text} disabled></input>
                <button className="btn btn-danger" type="button" id="button-addon2" onClick={() => props.delete(props.item.time)}>Delete</button>
            </div>
        </>
    );
}