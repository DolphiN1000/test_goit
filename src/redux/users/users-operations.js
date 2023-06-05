import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../shered/services/usersAPI';


export const fetchAllUsers = createAsyncThunk(
  'users/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await api.getAllUsers();
      console.log(data)
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);


export const fetchAddLike = createAsyncThunk(
  'contacts/addContact',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addLike(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
// ,
//   {
//     condition: ({ name, number }, { getState }) => {
//       const { contacts } = getState();
//       const normalizedName = name.toLowerCase();
//       const normalizedNumber = number.toLowerCase();
//       const result = contacts.items.find(({ name, number }) => {
//         return (
//           name.toLowerCase() === normalizedName ||
//           number.toLowerCase() === normalizedNumber
//         );
//       });
//       if (result) {
//         alert(`${name}: ${number} is in phonebook`);
//         return false;
//       }
//     },
//   }
);

// export const fetchDeleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (id, { rejectWithValue }) => {
//     try {
      
//       await api.deleteContact(id);
//       return id;
//     } catch ({ response }) {
//       return rejectWithValue(response.data);
//     }
//   }
// );