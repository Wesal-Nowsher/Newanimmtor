import React, { Component } from 'react';
import Login from '../login';
import Menucomp from '../menu/menuComponent';;

const initialState = {

};

export default (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case "LOGGED_IN":
            console.log("")
            break;
        default:
            break;

    }
    return newState;
};
