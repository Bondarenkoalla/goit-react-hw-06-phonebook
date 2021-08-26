import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('ADD_CONTACT', (name, number) => {
    return {
        payload: {
            id: uuidv4(),
            name,
            number
        }
    }
});
const deleteContact = createAction('DELETE_CONTACT');
const filterContacts = createAction('FITER_CONTACTS');

// redux

// const addContact = (name, number) => {
//     return {
//         type: 'ADD_CONTACT',
//         payload: { id: uuidv4(), name, number }
//     }
// };
// const deleteContact = (contactId) => {
//     return {
//         type: 'DELETE_CONTACT',
//         payload: contactId
//     }
// };
// const filterContacts = (filter) => {

//     return {
//         type: 'FITER_CONTACTS',
//         payload: filter
//     }
// }
export default { addContact, deleteContact, filterContacts };