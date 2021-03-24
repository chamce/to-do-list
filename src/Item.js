import React, { Component } from 'react';

export default function Item(props) {
    return (
        <>
            <div className="input-group mb-2">
                <div className="input-group-text">
                    <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" onClick={() => props.checkmark(props.item.time)}></input>
                </div>
                <input type="text" className="form-control" aria-label="Text input with checkbox" value={props.item.text} disabled></input>
                <button className="btn btn-danger" type="button" id="button-addon2" onClick={() => props.delete(props.item.time)}>Delete</button>
            </div>
        </>
    );
}