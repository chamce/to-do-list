import React, { Component } from 'react';

export default function Item(props) {
    return (
        <>
            <div class="input-group mb-2">
                <div class="input-group-text">
                    <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"></input>
                </div>
                <input type="text" class="form-control" aria-label="Text input with checkbox" value={props.text} disabled></input>
                <button class="btn btn-danger" type="button" id="button-addon2">Delete</button>
            </div>
        </>
    );
}