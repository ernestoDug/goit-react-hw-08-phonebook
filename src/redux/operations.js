import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// GET
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      // console.log(thunkAPI, 'g');
      return response.data;
    } catch (event) {
      return thunkAPI.rejectWithValue(event.message);
    }
  }
);

// POST
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contactNew, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contactNew);

      // console.log(thunkAPI, 'P', response);

      return response.data;
    } catch (event) {
      return thunkAPI.rejectWithValue(event.message);
    }
  }
);

//   DELETE
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      // console.log(response, 'd', thunkAPI);

      return response.data;
    } catch (event) {
      return thunkAPI.rejectWithValue(event.message);
    }
  }
);
