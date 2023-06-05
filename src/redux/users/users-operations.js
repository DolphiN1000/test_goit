import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../shered/services/usersAPI';


export const fetchAllUsers = createAsyncThunk(
  'users/fetchAll',
  async ({ page, limit }, thunkAPI) => {
    try {
      const data = await api.getAllUsers(page, limit);
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);


export const fetchSetFollow = createAsyncThunk(
  'contacts/toggleFollow',
  async ({data}, thunkAPI) => {
    try {
      const result = await api.setFollow(data);
      return result;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }

);

