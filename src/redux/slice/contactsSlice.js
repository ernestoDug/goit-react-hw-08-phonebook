import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from 'redux/operations';

import {
  STATUS,
  pendinger,
  fulfilderUniversall,
  fulfilder,
  fulfilderAdder,
  fulfildDeliter,
  rejecter,
} from 'redux/servises/funcForSliseCont';

// саночна станція
const operationsArray = [fetchContacts, addContact, deleteContact];
// сортировка
const operationType = type => operationsArray.map(operand => operand[type]);

export const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    const { PENDING, FULLFILLED, REJECTED } = STATUS;

    builder
      // запит
      .addCase(fetchContacts.fulfilled, fulfilder)
      // додавання
      .addCase(addContact.fulfilled, fulfilderAdder)
      // видаляння
      .addCase(deleteContact.fulfilled, fulfildDeliter)
      // сгрупував пендінги
      .addMatcher(isAnyOf(...operationType(PENDING)), pendinger)
      // сгрупував викиди
      .addMatcher(isAnyOf(...operationType(REJECTED)), rejecter)
      .addMatcher(
        isAnyOf(
          // сгрупував Унфулфілди
          ...operationType(FULLFILLED)
        ),
        fulfilderUniversall
      );
  },
});

export const contactsReducer = contactsSlice.reducer;

