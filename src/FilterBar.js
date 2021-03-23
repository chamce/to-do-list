import React, { Component } from 'react';

export default function FilterBar(props) {
    return (
        <>
            <div className='row mb-1'>
                <div className='col'>
                    <button className='border border-none bg-secondary text-white'>All</button>
                    <button className='mx-2'>Active</button>
                    <button className=''>Completed</button>
                </div>
            </div>
            <div className='row text-start'>
                <h6>X active tasks</h6>
            </div>
        </>
    );
}