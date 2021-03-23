import React, { Component } from 'react';

export default function InputBar(props) {
    return (
        <>
            <div className='row'>
                <h3>What needs to be done?</h3>
            </div>
            <div className='row mb-2'>
                <input type="text" name="name" />
            </div>
            <div className='row mb-2'>
                <button className='bg-dark text-white'>Add</button>
            </div>
        </>
    );
}