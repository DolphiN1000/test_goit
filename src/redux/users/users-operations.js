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


// export const fetchAddLike = createAsyncThunk(
//   'contacts/toggleLIke',
//   async (data, thunkAPI) => {
//     try {
//       const result = await api.addLike(data);
//       return result;
//     } catch ({ response }) {
//       return thunkAPI.rejectWithValue(response.data);
//     }
//   }
// 
// );

