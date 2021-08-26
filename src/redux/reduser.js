import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./actions"

const items = createReducer([], {
    [actions.addContact]: (state, { payload }) => [...state, payload],
    [actions.deleteContact]: (state, { payload }) => state.filter(({ id }) => id !== payload)

})

const filter = createReducer('', {
    [actions.filterContacts]: (_, { payload }) => payload
})
// redux
// const items = (state = [], { type, payload }) => {
//     switch (type) {
//         case 'ADD_CONTACT': return [...state, payload];
//         case 'DELETE_CONTACT': console.log('state', state); return state.filter(({ id }) => id !== payload);

//         default: return state;
//     }
// };
// const filter = (state = '', { type, payload }) => {
//     console.log(payload);
//     switch (type) {
//         case 'FITER_CONTACTS': return payload;
//         default: return state;
//     }
// };

export default combineReducers({ items, filter });